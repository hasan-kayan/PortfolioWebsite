import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import beetle from "../assets/car.png"; // red VW Beetle image

const stops = [
  { progress: 0.1, text: "Project A", image: "/img1.jpg", link: "https://example.com/a" },
  { progress: 0.4, text: "Project B", image: "/img2.jpg", link: "https://example.com/b" },
  { progress: 0.75, text: "Project C", image: "/img3.jpg", link: "https://example.com/c" },
];

export default function RoadScene() {
  const controls = useAnimation();
  const [carProgress, setCarProgress] = useState(0);
  const [currentStop, setCurrentStop] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (currentStop < stops.length) {
      controls.start({ pathLength: stops[currentStop].progress, transition: { duration: 2 } });
    }
  }, [currentStop]);

  const handleContinue = () => {
    setPaused(false);
    setCurrentStop((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPaused(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [currentStop]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* Road Path */}
      <svg viewBox="0 0 1200 600" className="w-full h-full absolute">
        <motion.path
          d="M100,300 C300,100 900,100 1100,300 S900,500 100,300"
          stroke="#ffffff40"
          strokeWidth="8"
          fill="none"
          strokeDasharray="20 15"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
      </svg>

      {/* Car (VW Beetle) */}
      <motion.div
        className="absolute w-14 h-14 z-10"
        animate={{ offsetDistance: `${stops[currentStop]?.progress * 100}%` }}
        transition={{ duration: 0.5 }}
        style={{
          offsetPath: "path('M100,300 C300,100 900,100 1100,300 S900,500 100,300')",
          offsetRotate: "auto",
        }}
      >
        <img src={beetle} alt="Car" className="w-full h-full" />
      </motion.div>

      {/* Popup */}
      {paused && (
        <motion.div
          className="absolute bg-white text-black p-3 rounded-lg shadow-md"
          style={{
            offsetPath: "path('M100,300 C300,100 900,100 1100,300 S900,500 100,300')",
            offsetDistance: `${stops[currentStop]?.progress * 100}%`,
            transform: "translate(-50%, -30%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="font-bold text-sm">{stops[currentStop].text}</p>
          <img
            src={stops[currentStop].image}
            alt={stops[currentStop].text}
            className="w-24 h-16 object-cover mt-1 rounded"
          />
          <a
            href={stops[currentStop].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-xs text-blue-500 underline"
          >
            Visit →
          </a>
          <button
            onClick={handleContinue}
            className="mt-1 text-xs text-gray-500"
          >
            Continue
          </button>
        </motion.div>
      )}
    </div>
  );
}
