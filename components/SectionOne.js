import { useState } from "react";
import { MdGamepad } from "react-icons/md";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import Divider from "./Divider";
const SectionOne = () => {
    const [onScreen, setOnScreen] = useState(false);
    return (
        <div className="w-full min-h-56 md:-mt-10">
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
                    
                    {onScreen && <motion.p initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: .75 }}  className="md:w-1/2 mx-auto md:text-center px-5">My game development journey started during my first year of university in 2016 and my interest to make games was mainly after I saw the rise of Android games at the time, especially those with high 3D graphics. During this time, I researched and finally discovered Unity which made me realize the potential of not just mobile games, but how accessible it made game development to smaller independent developers such as myself. During my 3rd year of university, I finally released my first game ever Terror: Evocation 1 on Google Play Store just to see how far my skills had come. I released it on Play Store just so my friends could download and try it out but to my surprise, it got discovered by a few Youtubers at the time and their videos amassed thousands of views which boosted my downloads to over 3000. A few weeks after this happened, the game got pulled off Google Play because it didn’t have a Privacy Policy and I never reuploaded it due to conflicting tight deadlines at school. This small and short-lived success meant everything to me at the time as it was what solidified my mindset to take game development very seriously and to pursue it as a career path. After graduating, I released my latest game Terror: Evocation 2 and I have also since been freelancing as a Unity Game Developer whilst looking for better, more stable opportunites. Working as a Freelancer for the past 3 years, I have since been extending my game development expertise to different clients all over the world.</motion.p>}
                </div>
            </div>
            </ScrollTrigger>
        </div>
    );
}

export default SectionOne;