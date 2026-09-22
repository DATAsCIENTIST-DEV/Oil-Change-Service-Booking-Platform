# OilFlow — Restaurant Oil Change Management

A polished, mobile-first Next.js 15 + React 19 + TypeScript + Tailwind CSS application for restaurant oil-change scheduling and service tracking.

## Included
- Responsive dashboard with operational KPIs
- Service catalog with pricing, duration and feature details
- Real booking flow with validation and confirmation state
- Expandable service-status timeline
- Notification center with unread/read interactions
- Restaurant profile + email/SMS preferences
- Next.js API routes for services, bookings, notifications and profile
- Zustand state layer ready to connect to a database/API
- Accessible labels, focus states, semantic navigation and keyboard-friendly controls
- Vitest setup and critical service-data test
- Design tokens aligned to #1E3A8A / #10B981 / #F3F4F6 / #1F2937

## Run
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production hardening
Connect the API routes to PostgreSQL/Supabase/Prisma, add authentication, server-side availability checks, payment processing if required, real email/SMS providers, and Playwright axe-based E2E/accessibility suites.
