export default function HeroContent({ title, paragraph }) {
  return (
    <>
      <div className="hero-content bg-white/30 backdrop-blur-lg p-4 rounded-lg inline-block">
        <h1
          className="text-black text-4xl font-bold text-center"
          style={{ marginTop: "1rem !important", marginBottom: "1rem" }}
        >
          {title}
        </h1>

        {paragraph && (
          <p className="text-black text-xl text-center">{paragraph}</p>
        )}
      </div>

      <style jsx>{`
        .hero-content {
          color: #000;
          font-size: 3rem;
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding: 16px 80px;
          width: max-content;
        }
      `}</style>
    </>
  );
}
