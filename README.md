# Sheila Kwan Consulting

Static-first Next.js marketing site for Sheila Kwan's AI implementation, customer success, and pipeline consulting practice.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment

The site renders without credentials in preview mode. Contact and scorecard forms show an explicit preview response until Resend is connected.

- `RESEND_API_KEY`: Resend server API key
- `RESEND_AUDIENCE_ID`: audience used for confirmed subscribers
- `RESEND_FROM_EMAIL`: verified sender, for example `Sheila Kwan <hello@sheilakwan.com>`
- `CONTACT_TO_EMAIL`: destination for contact-form messages
- `CONFIRM_TOKEN_SECRET`: long random secret used to sign confirmation and unsubscribe links
- `NEXT_PUBLIC_SITE_URL`: canonical production URL
- `NEXT_PUBLIC_CAL_LINK`: Cal.com event slug

Draft insight posts remain visible while `NEXT_PUBLIC_SITE_URL` is unset for review. Setting the final URL hides drafts marked `draft: true`.

## Deploy

Import this repository in Vercel, add the environment variables, and deploy. The final domain and Resend sending domain can be attached after the preview is approved.

Project status and external blockers are tracked in `EXECUTION-STATUS.md`.
