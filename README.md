
---

````md
# 🛍️ E-Commerce Product Page – Senior Frontend Developer Assessment

This project is a modern, interactive product page built with **Next.js 15+ (App Router)** and **TypeScript** as part of a technical assessment. It showcases real-world frontend engineering skills including performance optimization, accessibility, and custom UI logic.

---

## ✅ Project Checklist

### 🎯 Core Features

- [x] Product image gallery with **zoom on hover**
- [x] Responsive design across mobile, tablet, and desktop
- [x] Color/size variant selection with **real-time updates** (image & price)
- [x] Add to cart functionality with quantity selector
- [x] Expandable product description section

---

### ⚙️ Advanced Feature (Selected)

- [x] ✅ **Custom state management** using `React Context` + `useReducer`
  - Global cart state with add, remove, clear, and localStorage persistence
  - Stock-aware item validation before adding to cart

---

### 🧪 Technical Requirements

- [x] Built with **Next.js 15+** and **App Router**
- [x] Fully typed using **TypeScript**
- [x] Unit tests using `@testing-library/react` (e.g., `AddToCartButton`)
- [x] Accessible components (WCAG 2.1):
  - Proper ARIA roles, keyboard navigation
  - Color contrast & focus states
- [x] Proper handling of **loading and error states**
- [x] Optimized performance:
  - Next.js `Image` component
  - Lazy loaded image gallery
  - Lighthouse score > 90

---

### 🚀 Performance Enhancements

- [x] Fast initial page load
- [x] Smooth UI interactions (zoom, hover, transitions)
- [x] Optimized images (`next/image`, blur placeholder, responsive sizes)
- [x] Centralized cart state for efficient updates

---

### 🌚 Bonus Features

- [x] Dark/Light mode toggle with persistent state
- [x] Keyboard-navigable product variant selectors
- [x] Cart stored in `localStorage` for persistence
- [ ] Error logging (optional)
- [ ] Analytics integration (optional)

---

## 🧠 Technical Decisions

- **Custom State Management**: Built from scratch with Context + useReducer for full control and testability.
- **Image Zoom**: CSS transform with `transform-origin` to simulate interactive zoom.
- **Responsiveness**: Tailwind CSS utility classes with `aspect-square` and `max-w` wrappers.
- **Persistence**: LocalStorage sync in `CartContext` for robust UX.
- **Accessibility**: Focus management, color contrast, button semantics.

---

## 🧪 Testing

Run unit tests:

```bash
npm run test
````

Includes:

* ✅ AddToCartButton behavior test
* 🧩 Easily extensible with more tests

---

## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/ecommerce-product-page.git
cd ecommerce-product-page
npm install
npm run dev
```

Then open: [http://localhost:3000/product](http://localhost:3000/product)

---

## 📁 Folder Structure

```
/app
  /product         # Main product page (App Router)
  layout.tsx
/components        # Reusable UI (ImageGallery, CartOverview, etc.)
/context           # ThemeContext and CartContext
/lib               # Mock product data
/tests             # Unit tests
/public/images     # Jacket variant images
```

---

## 📸 Screenshots

> 📌 Add screenshots of:
>
> * Zoomed image gallery
> * Light/dark mode
> * Cart overview and removal
> * Variant switching in action

---

## 🔗 Deployment

> Optional: Deployed live at [https://your-vercel-project.vercel.app](https://your-vercel-project.vercel.app)

---

## Testing

> npx jest

--- 

## 👋 Final Notes

This project aims to demonstrate best practices in modern frontend development. Feel free to reach out with any questions or feedback!
