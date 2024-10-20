import Navigation from "./Navigation";

export default function HeaderNav({ children }) {
  return (
    <>
      <nav
        className="navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <Navigation />
      </nav>
      <style jsx>{`
        .navigation {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
}
