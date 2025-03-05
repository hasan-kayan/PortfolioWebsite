import { motion } from "framer-motion";
import { useRef } from "react";
import Typist from "react-typist-component";
import LaptopScene from "../Components/ModelComponents/LaptopModel";
import ESP32Scene from "../Components/ModelComponents/ESP32Model";
import CameraScene from "../Components/ModelComponents/CameraModel";
import logo from "../assets/logo.jpg"; // Import the logo image

export default function Home() {
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
                { content: "Computer graphics and 3D development one of my passions.", animate: false },
                { content: "Working on ThreeJs, ExpressJs, and Golang currently...", animate: false },
            ],
            align: "right",
            showLogo: false
        }
    ];

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start gap-20 p-10 overflow-y-auto">
            {sections.map((sec) => (
                <motion.div
                    key={sec.id}
                    className={`w-full flex items-center justify-center gap-10 ${sec.align === "right" ? "flex-row-reverse" : "flex-row"}`}
                >
                    <div className="relative w-[75vh] h-[75vh] flex justify-center">
                        {sec.component}
                    </div>
                    <div className="w-1/2 text-xl font-semibold text-fefae0 space-y-6 flex flex-col items-center">
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
            ))}
        </div>
    );
}