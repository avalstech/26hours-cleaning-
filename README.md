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
