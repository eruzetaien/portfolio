import React, { useEffect, useState } from "react";

const TransitionOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setVisible(true);
      setIsFadingOut(false);
    };

    const handleEnd = () => {
      setIsFadingOut(true);
      setTimeout(() => setVisible(false), 500); // match animation duration
    };

    window.addEventListener("start-transition", handleStart);
    window.addEventListener("end-transition", handleEnd);
    return () => {
      window.removeEventListener("start-transition", handleStart);
      window.removeEventListener("end-transition", handleEnd);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] pointer-events-none
        ${isFadingOut ? "fade-out-animation" : "fade-in-animation"}`}
        style={{ '--duration': '0.5' } as React.CSSProperties}
    />
  );
};

export default TransitionOverlay;
