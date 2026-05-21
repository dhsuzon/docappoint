# DocAppoint — Doctor Appointment Booking System

A full-stack doctor appointment booking platform where users can browse doctors, book appointments, and manage their bookings from a personal dashboard.

## Live Site

[https://docappoint.vercel.app](https://docappoint.vercel.app)

## Features

- **Browse & Search Doctors** — View all available doctors in a responsive card grid and filter by name in real time using the search bar
- **Secure Authentication** — JWT-based authentication with Better Auth supporting email/password login and Google OAuth social sign-in with password validation
- **Appointment Booking** — Book appointments with any doctor by filling a detailed form; all bookings are instantly saved to MongoDB
- **Personal Dashboard** — Private route showing your bookings with full update and delete functionality — changes reflect instantly without page reload
- **Profile Management** — View and update your display name and profile photo directly from the dashboard

## Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS, HeroUI
- **Backend:** Node.js, Express, MongoDB Atlas
- **Auth:** Better Auth (JWT + sessions), Google OAuth

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open the live site or set `NEXT_PUBLIC_API_URL` in `.env` to point to your backend before running locally.

## Environment Variables

```env
BETTER_AUTH_SECRET=
NEXT_PUBLIC_BETTER_AUTH_URL=
DB_URL=
CLIENT_ID=
CLIENT_SECRET=
NEXT_PUBLIC_API_URL=
```
