// components/LayoutHome.js

export default function ContentWrapper({ children }) {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 hero-content">
      {children}
    </div>
  );
}

// max-w-screen-sm – Maximum width for small screens (640px).
// max-w-screen-md – Maximum width for medium screens (768px).
// max-w-screen-lg – Maximum width for large screens (1024px).
// max-w-screen-xl – Maximum width for extra-large screens (1280px).
// max-w-screen-2xl – Maximum width for 2XL screens (1536px).
