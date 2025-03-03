import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Typist from "react-typist-component";
import LaptopScene from "../Components/ModelComponents/LaptopModel";
import ESP32Scene from "../Components/ModelComponents/ESP32Model";
import CameraScene from "../Components/ModelComponents/CameraModel";
import logo from "../assets/logo.jpg"; // Import the logo image

export default function Home() {
    const [section, setSection] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const isScrollingRef = useRef(false);

    const sections = [
        {
            id: 0,
            component: <LaptopScene />,
            texts: [
                { content: "Hi there! I am Hasan...", animate: true },
                { content: "I am a Full-Stack Software Developer & Electronic Engineer.", animate: false },
            ],
            align: "right",
            showLogo: true // Show logo only in this section
        },
        {
            id: 1,
            component: <ESP32Scene />,
            texts: [
                { content: "I have been working on many fields...", animate: true },
                { content: "Including IoT, automations and cloud engineering.", animate: false },
            ],
            align: "left",
            showLogo: false
        },
        {
            id: 2,
            component: <CameraScene />,
            texts: [
                { content: "Computer graphics and 3D development one of my patiants.", animate: false },
                { content: "Working on ThreeJs, ExpressJs Golang currently...", animate: false },
            ],
            align: "right",
            showLogo: false
        }
    ];

    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrollingRef.current) return;
            isScrollingRef.current = true;

            if (event.deltaY > 0 && section < sections.length - 1) {
                setScrollDirection("down");
                setSection((prev) => prev + 1);
            } else if (event.deltaY < 0 && section > 0) {
                setScrollDirection("up");
                setSection((prev) => prev - 1);
            }

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1300);
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
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
                            className={`absolute top-0 left-0 w-full h-screen flex items-center justify-center gap-10 p-10 ${sec.align === "right" ? "flex-row-reverse" : "flex-row"}`}
                        >
                            <div className="relative w-[75vh] h-[75vh] flex justify-center">
                                {sec.component}
                            </div>
                            <div className="w-1/2 text-xl font-semibold text-gray-800 space-y-6 flex flex-col items-center">
                                {/* Show logo only in the first section */}
                                {sec.showLogo && (
                                    <motion.img 
                                        src={logo} 
                                        alt="Logo" 
                                        className="w-56 h-56 rounded-full mb-10"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                )}
                                {sec.texts.map((textObj, index) => (
                                    textObj.animate ? (
                                        <Typist key={index} typingDelay={50} cursor={<span>|</span>}>
                                            <span>{textObj.content}</span>
                                        </Typist>
                                    ) : (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        >
                                            {textObj.content}
                                        </motion.p>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
}
