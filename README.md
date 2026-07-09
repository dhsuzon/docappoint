# 🩺 DocAppoint — Doctor Appointment Booking System

## Project Overview
**DocAppoint** is a comprehensive full-stack healthcare platform designed to streamline the doctor-patient interaction. It allows users to search for doctors, book appointments, and manage their personal health schedules through a secure, private dashboard.

## Project Live Link
[https://docappoint-two.vercel.app](https://docappoint-two.vercel.app)

---

## 🛠 Tech Stack
- **Frontend:** Next.js 16, React 19, Tailwind CSS, HeroUI
- **Backend:** Node.js, Express, MongoDB Atlas
- **Auth:** Better Auth (JWT + sessions), Google OAuth

---

## ✨ Core Features
- **Browse & Search:** Responsive doctor grid with real-time search filtering.
- **Secure Authentication:** JWT-based auth via Better Auth with Google OAuth integration.
- **Appointment System:** Seamless booking workflow saved instantly to MongoDB.
- **Personal Dashboard:** Private route to track, update, or delete personal appointments.
- **Profile Management:** Easy updates for display name and profile pictures.

---

## 📦 Main Dependencies
- **Frontend:** `next.js`, `react.js`, `framer-motion`, `better-auth`, `tailwindcss`
- **Backend:** `express.js`, `mongoose`, `cors`, `dotenv`,`nodemon`

---

## 🚀 Step-by-Step Local Setup Guide

Follow these steps to run the application on your local machine:

### Step 1: Clone Repositories
```
  git clone  [https://github.com/dhsuzon/docappoint.git](https://github.com/dhsuzon/docappoint.git) 
    
```
```
    git clone [https://github.com/dhsuzon/docappointment_server.git](https://github.com/dhsuzon/docappointment_server.git)
```

### Step 2: Backend Setup & Installation
    1. Navigate to backend: cd docappointment_server
    2. Install dependencies: npm install
    3. Create a .env file in the root and add
       ```PORT=9000
          CLIENT_URL=http://localhost:3000
          DB_URL=your_mongo_db_url
    4. Start server: npm start

### Step 3: Frontend Setup & Installation
    1. Navigate to frontend: cd ../docappoint
    2. Install dependencies: npm install
    3. Create a .env file in the root and add
       ```BETTER_AUTH_SECRET=Vv0iAmBsCnkExjr0VnT0I9aKhA4KIY6e
          NEXT_PUBLIC_API_URL=http://localhost:9000
          NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
          DB_URL=your_mongo_db_url
          CLIENT_ID=your_client_id
          CLIENT_SECRET=your_client_secret

     4. npm run dev
      
