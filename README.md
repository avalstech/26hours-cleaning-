# 26HoursCleaning MVP (Next.js + Tailwind)

Deploy-ready MVP website for **26HoursCleaning Services** with:
- Premium landing page (green/white)
- Booking request page (`/book`)
- Cleaner application page (`/join`)
- Contact form (inside `/book`)
- Legal pages (`/legal/terms`, `/legal/privacy`)
- API routes that optionally send admin notifications via **AWS SES** (when configured)

## Run locally
```bash
npm install
npm run dev
```

## Deploy to AWS Amplify
1. Push to GitHub
2. Amplify Console → New app → Host web app → connect repo
3. Build settings use `amplify.yml`

### Enable email notifications (optional)
Set env vars in Amplify:
- `AWS_REGION` (e.g., `eu-west-2`)
- `SES_FROM_EMAIL` (verified in SES)
- `ADMIN_EMAIL` (where you receive notifications)

If not set, the API routes still return success; email sending is skipped.

## Troubleshooting npm install (proxy/403)
If `npm install` fails with `403 Forbidden` (often from `envoy`), that indicates a network policy/proxy restriction in the environment—not a dependency tree issue in this repo.

### 1) Diagnose
```bash
npm run diagnose:npm-network
```
This command now exits non-zero on failures so it can be used in CI.

### 2) Fix locally (recommended)
Ask your network/admin team for your **allowed internal npm registry URL** (Artifactory/Nexus/Verdaccio/etc.), then run:
```bash
npm run configure:npm-registry -- https://<your-internal-registry>/
npm install
```

Or one-off:
```bash
npm install --registry=https://<your-internal-registry>/
```

### 3) If you still get 403
Check for proxy overrides and remove invalid ones in your shell profile/CI vars:
```bash
env | grep -Ei 'npm|proxy|registry'
npm config list -l
```
Common cleanup:
```bash
npm config delete proxy
npm config delete https-proxy
# then set only the approved values from your org
```

If your internal registry requires auth:
```bash
npm login --registry=https://<your-internal-registry>/
# or configure token in ~/.npmrc per your registry docs
```
