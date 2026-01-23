<p align="center">
  <img src="./public/logo-bisik-bisik.png" alt="Bisik-bisik Logo" width="220" />
</p>

<h1 align="center">Bisik-bisik</h1>

<p align="center">
  An experimental anonymous messaging app built with React.<br/>
  Simple, playful, and focused on privacy.
</p>

---

## ✨ About

**Bisik-bisik** is a lightweight anonymous messaging project originally built as a demo MVP.  
The idea is simple:  
people can send messages to a creator **without revealing their identity**.

No login for senders.  
No pressure.  
Just whispers.

This React version is a step forward from the static HTML demo, focusing on better structure, scalability, and developer experience.

---

## 🚀 Features

- 🕵️ Anonymous message sending
- 🧼 Word filtering (inappropriate words are masked automatically)
- 🧵 Timeline-style message display
- 🔐 Firebase-powered backend
- ⚛️ Built with React
- 🌱 Environment-based configuration (`.env`)

> This project is still evolving and intentionally kept minimal.

---

## 🛠 Tech Stack

- **React**
- **Tailwind CSS**
- **Firebase (Firestore / Auth)**
- **Vite / CRA** (depending on setup)
- **Vercel / Netlify** for deployment

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
> ⚠️ Never commit your .env file.
> Make sure it’s listed in .gitignore.

## 🧪 Status
This project is:
- ✅ Functional
- 🧠 Experimental
- 🚧 Under active iteration

Not intended for production (yet), but perfect as:
- a demo
- a playground
- a portfolio experiment

---

## 📌 Roadmap (Optional)
- Admin-only message deletion
- Better moderation controls
- Public / private mode
- Multi-user support
- Rate limiting

## 🤍 Credits
Built with curiosity and late-night energy.

> “Some messages are better whispered.”