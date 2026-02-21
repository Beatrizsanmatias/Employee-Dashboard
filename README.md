# 🏛️ Employee Portal — Internal Dashboard

A modern internal employee portal built for public sector organisations, designed to centralise day-to-day tools, IT support requests, and team communication into a single, accessible interface.

---

## 📌 Project Overview

This project was built as a portfolio piece inspired by real experience working within a public sector environment. The goal was to reimagine what a modern internal employee portal could look like, replacing outdated, fragmented tools with a clean, intuitive dashboard that non-technical staff can use comfortably.

---

## ✨ Features

### 🏠 Dashboard (Home)

- Personalised greeting with today's date
- At-a-glance stats: open tickets, resolved tickets, meetings today
- **Today's Meetings** widget — displays scheduled meetings pulled (in production) from the Microsoft Graph API / Outlook calendar
- **Recent Requests** — quick view of the latest IT support tickets and their statuses
- **Weather widget** — current local weather at a glance
- **Quick Access links** — one-click shortcuts to Microsoft Teams, Outlook, and SharePoint
- **Personal Notes** — a persistent scratchpad saved to localStorage between sessions

### 🎫 Help & Support

- Submit new IT support requests with category, priority, subject, and description
- View all previous requests with real-time status badges (Open, In Progress, Resolved)
- Newly submitted tickets appear immediately in the list without a page refresh

### 👥 Employee Directory

- Browse all employees with name, department, and contact options
- Live search by name or department
- Quick links to email (mailto) and Microsoft Teams chat per employee

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Beatrizsanmatias/Employee-Dashboard.git

# Navigate into the project
cd Employee-Dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`
