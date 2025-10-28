# Abrar Shahriar — Developer Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, showcasing my projects, technical expertise, and professional journey as a **Full Stack (MERN) Web Developer**.  
This portfolio reflects my focus on **clean design**, **functional interactivity**, and **performance-driven web development**.

---


## 🧠 Overview

This website serves as both a personal brand and a technical showcase — designed to highlight my web development skills, feature live project previews, and offer an easy way for recruiters and collaborators to connect.

Key design goals:
- Minimalistic and professional layout  
- Fast-loading, SEO-friendly pages  
- Dynamic animations and interactions for modern feel  
- Fully responsive across all devices  
- Clean and maintainable codebase  

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | [Next.js 14+ (App Router)](https://nextjs.org) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) |
| **Icons & Illustrations** | [Lucide React](https://lucide.dev), Custom SVGs |
| **Email Handling** | [EmailJS](https://www.emailjs.com/) |
| **Deployment** | [Vercel](https://vercel.com) |
| **Version Control** | Git & GitHub |

---

## 🧱 Features

### 💼 Projects Page
- Showcases all my major projects with details on:
  - Key technologies used  
  - Features and challenges  
  - Future improvement plans  
- Each project has a **“View Details”** page with deeper insights.  
- Implemented dynamic routing for project details using **Next.js App Router**.

### 📝 Blogs Page
- Built-in blog management feature powered by **Tiptap Editor**.  
- Blogs support formatted text, inline images, and rich HTML rendering.  
- Uses **Incremental Static Regeneration (ISR)** and **Tag-based Revalidation** for optimized performance and content freshness.

### 📬 Contact Page
- Interactive contact form integrated with **EmailJS**.  
- Uses **react-hook-form** + **zod validation** + **shadcn/ui Form** for robust and accessible input handling.  
- Sends form data directly to my email inbox without a custom backend.

### ⚡ Performance
- **Optimized images** via Next.js `<Image />` component.  
- **Lazy-loaded animations and icons** to minimize layout shifts.  
- Custom **SEO metadata** for better visibility.

### 🌗 Dark Mode
- Custom dark/light mode toggle implemented with shadcn/ui.

### 🧭 Navigation
- Sticky navbar for quick access to sections.  
- Smooth scroll between sections.  
- Highlighted active route indication for a seamless browsing experience.

---

## 🛠️ Installation & Setup

If you’d like to run the portfolio locally:

```bash
# Clone the repository
git clone https://github.com/Abrar9410/My-Portfolio.git

# Navigate into the project directory
cd My-Portfolio

# Install dependencies
npm install

# Create a .env.local file for environment variables
NEXT_PUBLIC_BASE_API=your_backend_api
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_USER_ID=your_emailjs_public_key

# Run the development server
npm run dev
```
Your app will be live at http://localhost:3000

## 📁 Folder Structure
```bash
src/
 ├── app/                   # Next.js app router pages
 │    ├── (routes)/
 │    ├── layout.tsx
 │    ├── loading.tsx
 │    ├── error.tsx
 │    ├── not-found.tsx
 ├── components/            # Reusable UI components (shadcn/ui based)
 ├── actions/               # Server actions (for revalidation, blogs, etc.)
 ├── hooks/                 # Custom React hooks
 ├── lib/                   # Utility functions and configurations
 ├── contexts/              # React Contexts
 ├── providers/             # Providers
 └── types/                 # TypeScript type definitions
 └── middleware.ts          # Middleware
```

## 🚀 Live Demo

👉 **[Visit Portfolio](https://abrar-shahriar.vercel.app)**