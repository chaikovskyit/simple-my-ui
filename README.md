# React Component Library — Storybook Test Assessment

This project implements a small **UI component library** using React + TypeScript with **Storybook**.  
The task: build 3 reusable components (`Input`, `Toast`, `SidebarMenu`) with various states and demonstrate them in Storybook.

---

## Tech Stack
- [Vite](https://vitejs.dev/) + React + TypeScript
- [Storybook](https://storybook.js.org/) v8
- CSS Modules (no external UI libraries)
- ESLint + Prettier
- (Bonus) Custom hooks & Context API

---

## Project Structure

src/
├── components/
│   ├── Input/
│   ├── Toast/
│   └── SidebarMenu/
├── hooks/
│   ├── useToast.ts
│   ├── ToastProvider.tsx
│   └── toastContext.ts
├── styles/
│   └── tokens.css
└── index.ts

---

## Components

### 1. Input
- Supports `text`, `password`, `number` types
- `clearable` (clear button appears **only when value is not empty**)
- Password visibility toggle
- Optional `label`, `helperText`, `error` states

**Stories include:**
- Text  
- Password (with toggle)  
- Number  
- With error  
- Without clearable  

---

### 2. Toast
- Variants: `info`, `success`, `warning`, `error`
- Positioned at **bottom-right**
- Auto-dismiss with `duration` (sticky when `duration=0`)
- Manual close via `×` button
- Fade/slide animation

**Stories include:**
- Playground (all variants)  
- Durations (1.5s, 3s, 5s, sticky)

---

### 3. Sidebar Menu
- Slides in from the right
- Closes when clicking on backdrop or pressing `Esc`
- Supports **1-level** and **2-level nested** items
- Accordion-like submenu behavior

**Stories include:**
- Closed (with “Open menu” button)  
- Open with nested items  
- One level only  

---

## 📸 Screenshots

**Inputs**
  
  - Input type TEXT
  <img width="396" height="225" alt="image" src="https://github.com/user-attachments/assets/41885102-0483-464d-bfd7-88804abfc4cb" />
  <img width="371" height="179" alt="image" src="https://github.com/user-attachments/assets/699be236-68c5-45aa-bc88-478dc222300f" />
  
  - Input type TEXT with ERROR
  <img width="304" height="179" alt="image" src="https://github.com/user-attachments/assets/14768ff8-4bdc-48c7-ae15-5329e7db4426" />
  
  - Input type TEXT clear
  <img width="313" height="159" alt="image" src="https://github.com/user-attachments/assets/b21b037d-37e1-4c5a-9af0-85e54f854630" />
  
  - Input type PASSWORD
  <img width="390" height="159" alt="image" src="https://github.com/user-attachments/assets/4d24db3a-4cbd-4de1-b11e-f2f4cba8b917" />
  <img width="334" height="132" alt="image" src="https://github.com/user-attachments/assets/2bb89b16-9c05-4ea1-8319-626852e1438e" />
  <img width="377" height="170" alt="image" src="https://github.com/user-attachments/assets/f2c61595-438e-43d5-aa4b-7e54f6dbf1ca" />
  
  - Input type NUMBER
  <img width="334" height="177" alt="image" src="https://github.com/user-attachments/assets/b1124c2e-23fd-4d91-8f0f-e6bc1d608c7a" />
  <img width="324" height="141" alt="image" src="https://github.com/user-attachments/assets/2cf6e1eb-7d5d-497c-84cc-318ac0f1c4ea" />

**SidebarMenu**

  - SidebarMenu Closed
  <img width="684" height="231" alt="image" src="https://github.com/user-attachments/assets/cdebc311-3e33-4a72-9720-0b568e87d454" />

  - SidebarMenu Opened
  <img width="680" height="623" alt="image" src="https://github.com/user-attachments/assets/d0d1ab60-b3be-4d31-89ff-996ec8620275" />

**Toasts**

  <img width="673" height="378" alt="image" src="https://github.com/user-attachments/assets/e03b7da1-7d91-4013-848a-aea84ea0ad19" />
  

## 🛠 Run Locally

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook
