import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LaptopScene from "./LaptopModel";
import ESP32Scene from "./ESP32Model";
import CameraScene from "./CameraModel";

export default function Home() {
    const [section, setSection] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const isScrollingRef = useRef(false);
    const sections = [
        { id: 0, component: <LaptopScene />, text: "This is a high-performance laptop." },
        { id: 1, component: <ESP32Scene />, text: "ESP32 is a powerful IoT module." },
        { id: 2, component: <CameraScene />, text: "A professional-grade camera model." }
    ];

    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrollingRef.current) return; // Prevents spamming scroll events
            isScrollingRef.current = true;

            if (event.deltaY > 0 && section < sections.length - 1) {
                setScrollDirection("down");
                setSection((prev) => prev + 1);
            } else if (event.deltaY < 0 && section > 0) {
                setScrollDirection("up");
                setSection((prev) => prev - 1);
            }

            // Unlock scrolling after the animation completes
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1300); // Ensure this matches transition duration
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [section]);

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
                {sections.map((sec) =>
                    sec.id === section ? (
                        <motion.div
                            key={sec.id}
                            initial={{ opacity: 0, y: scrollDirection === "down" ? 100 : -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: scrollDirection === "down" ? -100 : 100 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center gap-10 p-10"
                        >
                            <div className="relative w-[75vh] h-[75vh] flex justify-center">
                                {sec.component}
                            </div>
                            <div className="w-1/2 text-xl font-semibold text-gray-800">
                                <motion.p 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    {sec.text}
                                </motion.p>
                            </div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
}
