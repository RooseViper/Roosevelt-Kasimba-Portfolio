import { useState } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import Divider from "./Divider";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

const WorkSection = (props) => {
    const [onScreen, setOnScreen] = useState(false);

    function ProjectLayout({ title, id, expertise, solution, link, link_2, anchorText, anchorText_2, images, videoLink, videoTitle, itchEmbed, itchLink, itchTitle }) {
        return (
            <div className="project-card bg-black-1000 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300">
                <ScrollTrigger onEnter={() => setOnScreen(true)}>
                    {/* Header with Number and Title */}
                    <div className="flex items-start gap-4 mb-4">
                        {onScreen && (
                            <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="accent text-3xl font-bold mt-1"
                            >
                                {id}.
                            </motion.span>
                        )}
                        <div>
                            {onScreen && (
                                <motion.h2
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl font-bold"
                                >
                                    {title}
                                </motion.h2>
                            )}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {expertise.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rest of your component remains exactly the same */}
                    {videoLink && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="relative aspect-video w-full rounded-lg overflow-hidden mb-4"
                        >
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={videoLink}
                                title={videoTitle}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    )}

                    {onScreen && (
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-gray-300 mb-4 line-clamp-3"
                        >
                            {solution}
                        </motion.p>
                    )}

                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                        {link && (
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                href={link}
                                className="accent hover:text-orange-300 text-sm font-medium flex items-center gap-1"
                            >
                                {anchorText} ↗
                            </motion.a>
                        )}
                        {link_2 && (
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                href={link_2}
                                className="accent hover:text-orange-300 text-sm font-medium flex items-center gap-1"
                            >
                                {anchorText_2} ↗
                            </motion.a>
                        )}
                    </div>

                    {itchEmbed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-4"
                        >
                            <iframe
                                frameBorder="0"
                                src={itchEmbed}
                                width="100%"
                                height="169"
                                className="rounded"
                            />
                        </motion.div>
                    )}
                </ScrollTrigger>
            </div>
        );
    }

    // Rest of your component remains exactly the same
    function ProjectItem() {
        const projects = props.projects;

        return (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectLayout
                        key={index}
                        title={project.title}
                        id={project.id}
                        expertise={project.expertise}
                        solution={project.solution}
                        link={project.link}
                        link_2={project.link_2}
                        anchorText={project.anchorText}
                        anchorText_2={project.anchorText_2}
                        images={project.images}
                        videoLink={project.videoLink}
                        videoTitle={project.videoTitle}
                        itchEmbed={project.itchEmbed}
                        itchLink={project.itchLink}
                        itchTitle={project.itchTitle}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full mt-16 work" id="work">
            <ScrollTrigger onEnter={() => setOnScreen(true)} onExit={() => setOnScreen(false)}>
                <div className="flex flex-col">
                    <div className="accent mx-auto">
                        <motion.div 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-orange-500 mt-12"
                        >
                            {onScreen && <IoBriefcaseOutline size={70} />}
                        </motion.div>
                    </div>
                    <div>
                        {onScreen && (
                            <motion.h3 
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="uppercase tracking-widest text-center font-bold text-xl mt-4"
                            >
                                Work
                            </motion.h3>
                        )}
                    </div>
                    <div className="w-full my-4">
                        <div className="flex justify-center">
                            {onScreen && <Divider />}
                        </div>
                    </div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {onScreen && <ProjectItem />}
                </motion.div>
            </ScrollTrigger>
        </div>
    );
};
export default WorkSection;