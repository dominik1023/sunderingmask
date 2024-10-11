export default function Footer({ children }) {
  return (
    <>
      <nav className="navigation">
        <a href="/">Home</a> |<a href="/website-scanning">Website Scanning</a>
        <a href="/about-accessibility">About Accessibility</a>|{" "}
        <a href="/accessibility-lawsuits">Accessibility Lawsuits</a>|{" "}
        <a href="/faq">FAQ</a>
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
        .navigation a {
          color: white;
          text-decoration: none;
          padding: 10px;
        }
        .navigation a:hover {
          color: #ff6b6b;
        }
      `}</style>
    </>
  );
}
