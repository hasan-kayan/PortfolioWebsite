import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkIfHoveringButton = (e) => {
      const target = e.target;
      const isButtonLike =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea");

      setIsHoveringButton(!!isButtonLike);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", checkIfHoveringButton);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", checkIfHoveringButton);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Cursor glow effect */}
      <div className="relative">
        {/* Outer pulse */}
        <div
          className={`absolute rounded-full transition-all duration-200 ${
            isHoveringButton
              ? "w-16 h-16 bg-white opacity-60 blur-2xl"
              : "w-10 h-10 bg-white opacity-40 blur-2xl animate-ping"
          }`}
        />

        {/* Core ball */}
        <div
          className={`rounded-full transition-all duration-200 ${
            isHoveringButton
              ? "w-6 h-6 bg-white shadow-[0_0_30px_10px_rgba(255,255,255,0.9)]"
              : "w-4 h-4 bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.8)]"
          }`}
        />
      </div>
    </div>
  );
}
