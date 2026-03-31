# Apollo Health Marketing Website

A modern, responsive marketing website for Apollo Health built with React and Tailwind CSS.

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- React Router
- Neon Postgres (via `@neondatabase/serverless`)
- Netlify Functions (serverless backend)

## Pages
1. **Home** - Hero section with core services overview
2. **How It Works** - Process overview with 4-step flow
3. **For Employers & Brokers** - Accordion with key benefits
4. **Member Experience** - Employee benefits overview
5. **FAQ** - Frequently asked questions
6. **Contact** - Contact form → writes to Neon `contact_submissions` table

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Features
- ✅ Dark premium theme with enterprise feel
- ✅ Fully responsive design
- ✅ Reusable components
- ✅ Accessible contrast and typography

## Neon Database Setup

### Environment Variables

Set the following in your Netlify dashboard under **Site settings → Environment variables**:

| Variable            | Description                                         |
|---------------------|-----------------------------------------------------|
| `NEON_DATABASE_URL` | Neon Postgres connection string (starts with `postgresql://…`) |

> **Do not** commit this value to source control. It is only accessed server-side by Netlify Functions.

### Creating the Tables

Run the SQL in `db/schema.sql` against your Neon database. You can do this from the **Neon Console → SQL Editor** or via `psql`:

```bash
psql "$NEON_DATABASE_URL" -f db/schema.sql
```

This creates the `contact_submissions` table with indexes on `email`, `created_at`, `inquiry_type`, and `submission_status`.

## Forms → Neon Mapping

| Form           | Page      | Netlify Function                        | Neon Table              |
|----------------|-----------|-----------------------------------------|-------------------------|
| Contact form   | `/contact`| `/.netlify/functions/contact-submit`    | `contact_submissions`   |

## Deploying on Netlify

1. Push this repo to GitHub and connect it to Netlify.
2. Netlify will read `netlify.toml` (build base is `apollo/`).
3. Add the `NEON_DATABASE_URL` environment variable in the Netlify dashboard.
4. Run the SQL in `db/schema.sql` on your Neon database to create the table.
5. Deploy — the contact form will now persist submissions to Neon.

## Testing Each Form

### Contact Form (`/contact`)
1. Open the site and navigate to the **Contact** page.
2. Fill in the required fields (First Name, Last Name, Email, Phone, Inquiry Type, Message).
3. Click **Send Message**.
4. You should see a green success banner: *"Thank you for your interest! We will be in touch soon."*
5. Verify the row in Neon:
   ```sql
   SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 5;
   ```

### Verifying Records in Neon
- Open the **Neon Console → SQL Editor** for your project.
- Run: `SELECT * FROM contact_submissions ORDER BY created_at DESC;`
- Each submission includes `first_name`, `last_name`, `email`, `phone`, `inquiry_type`, `message`, `page_url`, UTM fields, `submission_status`, and timestamps.
