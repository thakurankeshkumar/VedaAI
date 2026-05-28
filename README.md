# VedaAI

AI-Powered Assignment & Question Paper Generator for Teachers

---

# 📌 Project Overview

VedaAI is a modern AI-powered educational platform built for teachers and schools to simplify assignment creation, question paper generation, and academic content management.

The platform allows teachers to:

- Generate assignments using AI
- Create question papers instantly
- Manage school settings
- Download assignments as PDF
- Access teaching toolkit pages
- Manage study materials
- Use responsive dashboards across desktop and mobile devices

This project was developed as part of an internship assignment.

---

# 🚀 Features

## ✅ AI Assignment Generator

Teachers can:

- Select question types
- Set marks and question counts
- Add instructions
- Add class and subject
- Generate assignments using AI

Powered using:

- Groq API
- Llama 3.3 70B Versatile Model

---

## ✅ Assignment Management

Teachers can:

- View all assignments
- Search assignments
- Open assignment details
- Download assignments as PDF

---

## ✅ Dynamic Question Paper

Generated papers automatically include:

- School name
- Subject
- Class
- Time allowed
- Total marks
- Instructions
- Questions
- Answer keys

---

## ✅ PDF Download

Assignments can be exported directly as downloadable PDF files.

Libraries Used:

- html2pdf.js
- html2canvas
- jsPDF

---

## ✅ Settings Page

Teachers can update:

- School name
- City
- Principal name
- Email
- Phone number
- Board details

All settings are stored in MongoDB.

---

## ✅ Responsive Design

Fully responsive UI for:

- Desktop
- Tablet
- Mobile devices

Responsive components include:

- Mobile navbar
- Mobile bottom navigation
- Responsive assignment cards
- Responsive forms
- Responsive toolkit pages

---

## ✅ Static Pages

Additional UI pages included:

- Home Page
- My Groups
- Library
- AI Toolkit

---

# 🛠️ Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

---

## Backend

- Next.js API Routes
- MongoDB
- Mongoose

---

## AI Integration

- Groq SDK
- Llama 3.3 70B Versatile

---

## PDF Generation

- html2pdf.js
- html2canvas
- jsPDF

---

# 📂 Project Structure

```bash
app/
 ├── (dashboard)/
 │    ├── assignments/
 │    ├── create/
 │    ├── settings/
 │    ├── library/
 │    ├── toolkit/
 │    └── page.tsx
 │
 ├── api/
 │    ├── assignments/
 │    ├── generate/
 │    └── settings/
 │
components/
 ├── navbar.tsx
 ├── sidebar.tsx
 ├── MobileBottomBar.tsx

lib/
 └── mongodb.ts

models/
 ├── Assignment.ts
 └── Settings.ts
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🧠 AI Workflow

1. Teacher fills assignment form
2. Data sent to `/api/generate`
3. Groq AI generates structured JSON
4. JSON stored in MongoDB
5. Assignment rendered dynamically
6. Teacher can download PDF

---

# 📱 Mobile Responsiveness

The application includes:

- Floating action button
- Bottom mobile navigation
- Mobile optimized navbar
- Responsive forms and cards
- Adaptive layouts for small screens

---

# 🎨 UI Design Highlights

- Modern glassmorphism-inspired UI
- Soft rounded corners
- Clean grayscale design system
- Orange accent branding
- Minimal teacher-friendly experience

---

# 📦 Main Libraries Used

```json
{
  "next": "16",
  "react": "19",
  "typescript": "5",
  "tailwindcss": "4",
  "mongoose": "latest",
  "groq-sdk": "latest",
  "html2pdf.js": "latest",
  "lucide-react": "latest"
}
```

---

# 📄 Pages Included

| Page | Status |
|------|--------|
| Home | ✅ |
| Assignments | ✅ |
| Create Assignment | ✅ |
| Assignment Details | ✅ |
| Settings | ✅ |
| My Groups | ✅ Static |
| Library | ✅ Static |
| AI Toolkit | ✅ Static |

---

# 🔥 Key Highlights

- AI-powered assignment generation
- Dynamic question paper system
- MongoDB integration
- Responsive dashboard UI
- PDF export functionality
- Clean modern interface
- Mobile optimized design

---

# 📚 Learning Outcomes

This project helped in learning:

- Full-stack Next.js development
- API route creation
- MongoDB integration
- AI API integration
- Responsive UI development
- PDF generation in React
- TypeScript usage
- Component architecture

---

# 👨‍💻 Developed By

**Ankesh Thakur**

B.Tech CSE Student  
Lovely Professional University

---

# 📃 License

This project was created for educational and internship evaluation purposes.

---

# 🙌 Acknowledgements

- Next.js
- Groq AI
- Tailwind CSS
- MongoDB
- Lucide Icons
- React Community