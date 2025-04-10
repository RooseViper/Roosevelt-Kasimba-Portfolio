import React, { useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"
import Divider from "./Divider";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import { transition } from "./Animations";

const Header = () => {
    const [onScreen, setOnScreen] = useState(false);

    const ReadMore = ({ text }) => {
        const maxChar = 200;
        const [isReadMore, setIsReadMore] = useState(text.length > maxChar ? true : false);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };

        return (
            <div>
                <p className="transition-all ease-in-out duration-300 delay-200">
                    {isReadMore ? text.toString().substring(0, maxChar) : text}
                </p>
                <button className="text-orange-500 p-0" onClick={toggleReadMore}>{isReadMore ? <IoAddOutline /> : <IoRemoveOutline />}</button>
            </div>
        )
    }

    function AboutInfo() {
        return (
            <ScrollTrigger onEnter={() => setOnScreen(true)}>
            {onScreen && <motion.div initial={{ x: '-100', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'tween', duration: .75 }} className="flex flex-col w-full mt-8 md:m-0 md:text-left">
                <h4 className="uppercase tracking-widest font-bold">About Me</h4>
                <ReadMore text="My name is Roosevelt Kasimba Mwandira and I am a highly passionate Game/XR Developer. My passion for Game/XR development allows me to extend my thoughts into reality. The best part about this is that I get to share these thoughts as immersive experiences that can be experienced by anyone.">
                </ReadMore>
            </motion.div>}
            </ScrollTrigger>
        )
    }

    function OtherInfo() {
        const skills = [
            "Unity", "Unreal Engine", "Phaser", "Multiplayer", 
            "C#", "JavaScript", "Git", "AWS", "REST APIs", 
            "CI/CD", "Adobe Photoshop", "Docker", 
            "ASP.NET Core", "3D Modelling (Unity Pro-Builder)", "FL Studio"
        ];

        return (
            <motion.div
                initial={{ x: '100', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: 'tween', duration: 0.75 }}
                className="flex flex-col w-full mt-8 md:m-0 md:text-right"
            >
                <h4 className="uppercase tracking-widest md:text-right font-bold mb-4">Skills</h4>
                <div className="flex flex-wrap gap-2 justify-end">
                    {skills.map((skill, index) => (
                        <span 
                            key={index}
                            className="bg-gray text-gray-300 text-xs px-3 py-1 rounded-full border border-orange-300 hover:bg-gray-900 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        );
    }  

    return (
        <div className="w-full mt-16"> {/* Added top margin for spacing */}
            <div className="w-full md:w-9/12 text-center mx-auto">
                <motion.h1 initial={{ y: '-100', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, type: 'tween', duration: .75 }} className="text-3xl md:text-5xl font-bold">About me | Skills</motion.h1>
            </div>
            <div className="w-full flex justify-center my-4">
                <Divider />
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="w-full">
                    <AboutInfo />
                </div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={transition} className="md:order-none h-96 m-8 border-x-2 border-t-2 p-2 border-orange-500 order-first w-full rounded-t-full">
                    <motion.div initial={{ y: '100', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, type: 'tween', duration: .75 }} className="w-full h-full rounded-t-full bg-cover bg-center brightness-50 hover:brightness-100 focus:brightness-100 active:brightness-100" style={{ backgroundImage: `url("/My Picture.jpg")` }}></motion.div>
                </motion.div>
                <div className="w-full">
                    <OtherInfo />
                </div>
            </div>
        </div>
    );
}

export default Header;
