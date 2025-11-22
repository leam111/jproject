
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function PromoBanner() {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    if (code.trim() !== "") {
      setApplied(true);
      setTimeout(() => setApplied(false), 2500);
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <style>{`
        .promo-wrap {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:14px;
          padding:12px;
          border-radius:12px;
          background: linear-gradient(90deg, rgba(250, 240, 230,1) 0%, rgba(237, 224, 200,1) 50%, rgba(242, 234, 214, 1) 100%);
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          position: relative;
          overflow: visible;
          transform-origin: center;
          animation: floaty 6s ease-in-out infinite;
        }

        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .promo-badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 12px;
          background: linear-gradient(135deg,#ff9a9e,#fad0c4);
          border-radius:999px;
          font-weight:700;
          color: #3b0d12;
          box-shadow: 0 6px 14px rgba(249,105,117,0.18);
          transform: rotate(-3deg);
          animation: badge-pop 1.2s ease forwards;
        }

        @keyframes badge-pop {
          0% { transform: scale(0.85) rotate(-3deg); opacity: 0; }
          60% { transform: scale(1.06) rotate(-2deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }

        .promo-text {
          font-size: 14px;
          color:#222;
          max-width: 340px;
        }

        .promo-form {
          display:inline-flex;
          align-items:center;
          gap:8px;
          margin-left:6px;
        }

        .promo-input {
          padding:8px 10px;
          border-radius:8px;
          border:1px solid rgba(0,0,0,0.08);
          outline:none;
          width:170px;
          font-weight:600;
        }

        .promo-btn {
          padding:8px 12px;
          border-radius:8px;
          border:none;
          cursor:pointer;
          font-weight:700;
          background:rgba(238, 216, 187, 1);;
          color:white;
          box-shadow: 0 6px 16px rgba(59,130,246,0.18);
          transform-origin:center;
          transition: transform .12s ease, box-shadow .12s ease;
        }

        .promo-btn:active { transform: translateY(1px) scale(.995); }

        .sparkle {
          position:absolute;
          width:14px; height:14px;
          background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0) 45%), linear-gradient(45deg, #ffd86f, #ff7ab6);
          border-radius:50%;
          filter: blur(.15px);
          animation: twinkle 1.8s linear infinite;
          opacity: .95;
        }
        .sparkle.s1 { top:-8px; left:12%; animation-delay: 0s; transform: scale(.9); }
        .sparkle.s2 { top:-4px; right:14%; animation-delay: .4s; transform: scale(.7); }
        .sparkle.s3 { bottom:-6px; left:8%; animation-delay: .8s; transform: scale(.6); }

        @keyframes twinkle {
          0% { transform: scale(.6) rotate(0deg); opacity:.4; }
          50% { transform: scale(1.05) rotate(20deg); opacity:1; }
          100% { transform: scale(.6) rotate(0deg); opacity:.4; }
        }

        .applied-pill {
          margin-left:8px;
          padding:6px 10px;
          border-radius:999px;
          background: rgba(8, 34, 77, 0.12);
          color: #e6f1eeff;
          font-weight:700;
          font-size:13px;
        }

        @media (max-width:520px) {
          .promo-wrap { flex-direction:column; gap:10px; padding:10px; }
          .promo-form { margin-left:0; width:100%; justify-content:center; }
          .promo-input { width:140px; }
        }
      `}</style>

      <div className="promo-wrap" role="region" aria-label="Promotional banner">
        <div className="promo-badge" aria-hidden>
          ✨ 60% OFF
        </div>

        <div className="promo-text">
          <strong>Enter Promo Code for 60% discount off</strong>
          <div style={{ fontSize: 12, marginTop: 6, color: "#444" }}>
            Limited time — apply at checkout!
          </div>
        </div>

        <form className="promo-form" onSubmit={handleApply} aria-label="Promo code form">
          <input
            className="promo-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="KaLéa60"
            aria-label="Promo code"
          />
          <button className="promo-btn" type="submit" aria-label="Apply promo code">
            {applied ? "Applied ✓" : "Apply"}
          </button>

          {applied && <span className="applied-pill" role="status">20% applied</span>}
        </form>

        <div className="sparkle s1" aria-hidden />
        <div className="sparkle s2" aria-hidden />
        <div className="sparkle s3" aria-hidden />
      </div>
    </div>
  );
}
