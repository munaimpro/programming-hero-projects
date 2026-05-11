# 🎓 SkillSphere – Online Learning Platform

## 📌 Project Overview

SkillSphere is a modern online learning platform where users can explore courses, view details, and manage their learning journey. It is built using Next.js App Router with a clean UI, authentication system, and dynamic course features.

---

## 🚀 Live URL

👉 [https://skill-sphere-munaimpro.vercel.app](https://skill-sphere-munaimpro.vercel.app/)

---

## 📂 GitHub Repository

👉 [https://github.com/munaimpro/programming-hero-assignment-8](https://github.com/munaimpro/programming-hero-assignment-8)

---

## 🎯 Project Purpose

The goal of this project is to build a fully functional online learning platform with authentication, protected routes, course browsing, and profile management features using modern web technologies.

---

## ✨ Key Features

### 🔐 Authentication System

* Email & Password Login/Register
* Google Social Login
* Protected Routes (Course Details, Profile)
* Redirect after login (callback URL)

### 📚 Course Features

* Display all courses from JSON data
* Search courses by title
* Trending Courses section (based on rating)
* Top Courses (highest-rated)
* Course Details page with curriculum

### 👤 User Features

* Profile page with user info
* Update profile (name & image)
* Persistent login session

### 🎨 UI & UX

* Fully responsive (Mobile, Tablet, Desktop)
* Modern UI using Tailwind CSS + DaisyUI
* Animated components using Framer Motion
* Loading states during data fetching
* Toast notifications for success/error

---

## 🧠 Technologies Used

* **Next.js**
* **Tailwind CSS**
* **DaisyUI**
* **Better Auth**
* **MongoDB**
* **React Hook Form**

---

## 📦 NPM Packages Used

* framer-motion → Animations
* react-toastify → Notifications
* react-hook-form → Form handling
* better-auth → Authentication system
* lucide-react → Icons

---

## ⚙️ Environment Variables

Create a `.env` file and add:

```
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=your_url
SKILLSPHERE_DB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
NEXT_PUBLIC_BASE_URL=your_base_url
```

---

## 📱 Pages Overview

* `/` → Home
* `/course` → All Courses + Search
* `/course/[id]` → Course Details (Protected)
* `/login` → Login Page
* `/signup` → Register Page
* `/profile` → User Profile (Protected)
* `/profile/update` → Update Profile
