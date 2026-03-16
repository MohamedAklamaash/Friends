# Friends

> A full-stack social media platform where people connect, share moments, and build their circle — built with Next.js 14, MongoDB, and a modern component-driven architecture.

---

## What is Friends?

Friends is a **production-ready social networking application** that gives users everything they expect from a modern social platform — and then some. It's not a demo. It's not a tutorial project. It's a fully functional, deployable social media app with real authentication, real-time-like interactions, cloud media storage, and a clean, responsive UI.

---

## Core Features

### Authentication & Security
- **Secure sign-up & login** with bcrypt-hashed passwords and JWT-based sessions
- **Forgot password flow** — users get a time-limited reset link delivered straight to their inbox via a beautifully templated email

### User Profiles
- Fully customizable profiles — **display name, username, bio, profile photo, cover photo, gender, birthday**
- Every user gets their own public profile page at `/u/[username]`
- Edit your profile anytime with instant UI updates

### Posts & Feed
- Create posts with **text content + optional image uploads**
- **Privacy controls** — set any post to `public` or `only me`
- Edit and delete your own posts
- Global feed showing all public posts, sorted by latest activity
- **Like / Unlike** posts with live like counts and a list of who liked it

### Follow System
- Follow and unfollow other users
- See your **followers and following counts** on your profile
- **Suggested users** page — discover new people to connect with

### Media Uploads
- Powered by **UploadThing** — drag-and-drop image uploads for posts and profile/cover photos
- Images are stored in the cloud, not on your server

### Email Notifications
- Transactional emails via **Nodemailer + Gmail**
- React Email templates for a polished, branded email experience
---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)
- UploadThing account
- Gmail account with App Password enabled

### Setup

Copy the environment template and fill in your values:

```bash
cp .env.local.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Docker

```bash
docker build -t friends .
docker run -p 3000:3000 --env-file .env.local friends
```

---

## Environment Variables

See `.env.local` for the full list of required variables. Key ones:

- `DATABASE_URL` — MongoDB connection string
- `JWT_SECRET` — Secret for signing JWT tokens
- `UPLOADTHING_TOKEN` — For cloud image uploads
- `EMAIL_USERNAME` / `EMAIL_PASSWORD` — Gmail credentials for transactional email
- `INNGEST_SIGNING_KEY` / `INNGEST_EVENT_KEY` — For background job processing

---

## Deployment

The app is configured for **Vercel** out of the box. Set your environment variables in the Vercel dashboard and deploy.

Live demo: [friends-2.vercel.app](https://friends-2.vercel.app)

---

## License

MIT
