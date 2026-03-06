#!/usr/bin/env bash
set -euo pipefail

REGISTRY="${1:-https://registry.npmjs.org/}"
PACKAGE="${2:-react}"
FAILURES=0

printf 'Checking npm registry reachability...\n'
printf 'Registry: %s\nPackage:  %s\n\n' "$REGISTRY" "$PACKAGE"

printf '[1/3] npm ping...\n'
if npm ping --registry "$REGISTRY" >/tmp/npm-ping.out 2>/tmp/npm-ping.err; then
  cat /tmp/npm-ping.out
  echo "✅ npm ping succeeded"
else
  cat /tmp/npm-ping.err
  echo "❌ npm ping failed"
  FAILURES=$((FAILURES + 1))
fi

echo
printf '[2/3] npm view...\n'
if npm view "$PACKAGE" version --registry "$REGISTRY" >/tmp/npm-view.out 2>/tmp/npm-view.err; then
  cat /tmp/npm-view.out
  echo "✅ npm metadata fetch succeeded"
else
  cat /tmp/npm-view.err
  echo "❌ npm metadata fetch failed"
  FAILURES=$((FAILURES + 1))
fi

echo
printf '[3/3] curl HEAD (via current proxy env)...\n'
if curl -I "$REGISTRY" >/tmp/npm-curl.out 2>/tmp/npm-curl.err; then
  sed -n '1,20p' /tmp/npm-curl.out
  echo "✅ curl HEAD succeeded"
else
  sed -n '1,40p' /tmp/npm-curl.err
  echo "❌ curl HEAD failed"
  FAILURES=$((FAILURES + 1))
fi

echo
cat <<'TXT'
If you see HTTP 403 from a proxy (e.g. envoy), this is a network policy issue, not a package.json issue.
Use an allowed internal npm registry mirror and run:
  npm config set registry <allowed_registry_url>
or for one command:
  npm install --registry=<allowed_registry_url>
TXT

echo
if [ "$FAILURES" -eq 0 ]; then
  echo "All network checks passed."
else
  echo "Network checks failed: $FAILURES"
  exit 1
fi
