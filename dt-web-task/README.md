# Figma UI Implementation using Vite + React + Tailwind CSS

## Project Overview

This project focuses on creating an **exact UI implementation** of a provided Figma design using a modern frontend stack. The objective is to accurately translate the Figma design into a fully responsive desktop screen size and pixel-aligned web interface while adhering to best practices in React development and utility-first styling.

The application is built using **Vite** for fast development and bundling, **React** for component-based UI architecture, and **Tailwind CSS** for efficient and consistent styling.

---

## Tech Stack

- **Vite** – Fast build tool and development server
- **React (JavaScript)** – UI library for building reusable components
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Node.js & npm** – Dependency management

---

## Key Objectives

- Replicate the Figma design **as accurately as possible** (layout, spacing, typography, colors)
- Use clean, reusable React components
- Follow Tailwind CSS best practices
- Ensure consistent UI alignment with the Figma specifications

---

## Features

- Pixel-perfect UI based on Figma design
- Reusable and modular React components
- Clean and maintainable code structure
- Fast development experience with Vite

---

## Project Setup

### Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or later recommended)
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/anusreegithub/DT-Web-Development-Task.git

# Navigate to the project directory
cd dt-web-task

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Folder Structure

```
├── src
│   ├── components
│       ├──common          # Reusable UI components
│       ├── layout         # Headers, Notification, Sidebar
│   ├── constant
        ├──DataContext.js  # Json data from API
│   ├── pages              # Website Pages
│   ├── App.jsx      # Root component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Tailwind CSS imports
├── public
├── vite.config.js
└── package.json
```

---

## Styling Approach

- Tailwind CSS utility classes are used extensively for layout, spacing, typography, and colors
- Custom Tailwind configuration is applied where required to match Figma tokens

## Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

---

## Conclusion

This project demonstrates the ability to convert a Figma design into a high-quality, production-ready React UI using modern tooling and best practices. The focus remains on accuracy, and maintainability, also responsiveness in desktop screen sizes
