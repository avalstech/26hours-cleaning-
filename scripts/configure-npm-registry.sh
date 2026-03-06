#!/usr/bin/env bash
set -euo pipefail

REGISTRY="${1:-${NPM_REGISTRY:-}}"
if [ -z "$REGISTRY" ]; then
  echo "Usage: $0 <registry-url>"
  echo "or set NPM_REGISTRY env var"
  exit 1
fi

npm config set registry "$REGISTRY"
echo "Set npm registry to: $(npm config get registry)"

echo "Validating registry connectivity..."
npm ping --registry "$REGISTRY"
echo "Registry is reachable."
