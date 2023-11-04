import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Divider from "./Divider";
import { motion } from "framer-motion";

const StatsSection = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [onScreen, setOnScreen] = useState(false);

    return (
        <div className="w-full md:flex mt-8">
            <ScrollTrigger onEnter={() => setOnScreen(true)}>
                <div className="md:w-1/2">
                    {onScreen && <motion.h1 initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: .75 }} className="text-3xl md:text-5xl font-bold">Statistics.</motion.h1>}
                    <div className="w-full">
                        {onScreen && <Divider />}
                    </div>
                </div>
            </ScrollTrigger>

            <ScrollTrigger className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="text-center">
                    {counterOn && <h2 className="accent text-5xl font-bold"><CountUp start={0} end={5} duration={1.5} delay={0} />+</h2>}
                    <p>Years of Experience</p>
                </div>
                <div className="text-center">
                    {counterOn && <h2 className="accent text-5xl font-bold"><CountUp start={0} end={8} duration={1.5} delay={0} />+</h2>}
                    <p>Games Completed</p>
                </div>
                <div className="text-center">
                    {counterOn && <h2 className="accent text-5xl font-bold"><CountUp start={0} end={3} duration={1} delay={0} /></h2>}
                    <p>Games Shipped</p>
                </div>
            </ScrollTrigger>
        </div>
    );
}

export default StatsSection;