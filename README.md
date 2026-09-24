# Afterword — webinar → ebook landing site

A 3-page static site: `index.html` (home), `pricing.html`, `contact.html`, sharing `styles.css`.
No build step, no dependencies — just static files.

## Before you deploy

1. **Replace the placeholder email.** Search all three HTML files for
   `hello@afterword.example` and swap in your real address.
2. **Rename the brand if you want.** "Afterword" is a placeholder name
   (plays on webinar → book). Find/replace "Afterword" across the files
   if you'd rather use something else.
3. **Swap the favicon / add a real domain later** — not included yet.

## The contact form

Right now the form has no backend: submitting it opens the visitor's email
client with the message pre-filled (via `mailto:`). That works with zero
setup, but it means a submission only "lands" if their email client is
configured, and you get nothing to track in a dashboard.

If you want submissions to reliably land somewhere (a dashboard, a Slack
notification, a spreadsheet) without opening Mail, the easiest upgrade with
no server code is [Formspree](https://formspree.io) (free tier available):

1. Create a free Formspree account and a new form, get your endpoint URL.
2. In `contact.html`, replace the `<form id="contact-form">` tag's JS
   handler with a plain form post:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
   and delete the `<script>` block at the bottom of the file.

## Deploying: GitHub → Vercel

1. Create a new GitHub repo and push these files:
   ```bash
   git init
   git add .
   git commit -m "Afterword landing site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **Add New → Project**, and import the repo.
3. Framework preset: **Other** (it's static HTML — no build command,
   no output directory override needed).
4. Click **Deploy**. Vercel gives you a live `.vercel.app` URL; add a
   custom domain later under Project → Settings → Domains.

Every future `git push` to `main` auto-deploys.
