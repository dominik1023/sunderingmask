// src/components/Divider.js
export default function Divider() {
  return (
    <div className="divider">
      <style jsx>{`
        .divider {
          height: 2px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          margin: 20px 0;
          position: relative;
        }
        .divider::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background-color: #ccc;
        }
      `}</style>
    </div>
  );
}
