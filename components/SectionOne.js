import { useState } from "react";
import { MdGamepad } from "react-icons/md";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import Divider from "./Divider";
const SectionOne = () => {
    const [onScreen, setOnScreen] = useState(false);
    return (
        <div className="w-full min-h-75 md:-mt-10">
           <ScrollTrigger onEnter={() => setOnScreen(true)}>
            <div className="breakout h-full flex flex-col justify-center items-center pb-16">
                <motion.div initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: .75 }} className="text-orange-500 mt-12">
                    {onScreen && <MdGamepad size={70} />}
                </motion.div>
                <div>
                    {onScreen && <motion.h3 initial={{ y: '-100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: .75 }} className="uppercase tracking-widest text-center font-bold text-xl mt-4">My Journey</motion.h3>}
                        <div className="flex justify-center my-4">
                            {onScreen && <Divider />}
                        </div>
                    {onScreen && (
                        <motion.ul
                            initial={{ y: '100', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, type: 'tween', duration: 0.75 }}
                            className="md:w-1/2 mx-auto md:text-center px-5 text-left list-disc list-inside space-y-2 text-white"
                        >
                            <li><strong>2015:</strong> Started university and became inspired by the rise of high-quality 3D Android games.</li>
                            <li><strong>2016:</strong> Discovered Unity and began exploring mobile game development.</li>
                            <li><strong>2017:</strong> Released my first game <em>Terror: Evocation 1</em> on Google Play. It was featured by YouTubers, resulting in 3,000+ downloads.</li>
                            <li><strong>2019:</strong> Graduated and started to make my 2nd game <em>Terror: Evocation 2</em></li>
                            <li><strong>2022:</strong> Released <em>Terror: Evocation 2</em>.</li>
                            <li><strong>2021–Present:</strong> Freelancing as a Game Developer for clients worldwide, expanding my skills and portfolio.</li>
                        </motion.ul>
                    )}
                </div>
            </div>
            </ScrollTrigger>
        </div>
    );
}

export default SectionOne;