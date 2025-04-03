import { useState } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import Divider from "./Divider";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

const WorkSection = (props) => {
    const [onScreen, setOnScreen] = useState(false);

    function ProjectLayout({ title, id, expertise, solution, link,link_2, anchorText,anchorText_2, images, videoLink, videoTitle, itchEmbed, itchLink, itchTitle}) {
        const [selectedImg, setSelectedImg] = useState(images[0]);

        return (
            <div>
                <ScrollTrigger onEnter={() => setOnScreen(true)}>
                    
                    <div className="w-full md:flex mt-8">
                        <div className="md:w-2/5 items-center space-x-2">
                            {onScreen&&<motion.h1 initial={{ x: '-100', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: 1 }} className="text-3xl font-bold"><b className="accent">{id}.</b>{title}</motion.h1>}
                            <div className="flex space-x-2 accent">
                                {expertise.map((expertise, index) => (
                                    <div className="uppercase text-sm" key={index}><span>{expertise}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            {onScreen&&<motion.p initial={{ x: '100', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: 1 }}>{solution}</motion.p>}
                            <a href={link}>{anchorText}</a>-----
                            <a href={link_2}>{anchorText_2}</a>
                        </div>
                    </div>
                    <div className="iframe-container">
                    {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/GeyN_HeyadI" title="Basement of Fear" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <iframe width="1161" height="653" src={videoLink} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {console.log(videoLink)}
                     
                    </div>
                    <div>
                        {/* Conditionally render the Itch.io button */}
                        {itchEmbed && (
                            <iframe
                                frameborder="0"
                                src={itchEmbed}
                                width="554"
                                height="169">
                                <a href={itchLink}>{itchTitle}</a>
                            </iframe>
                        )}
                    </div>
                   {/* {onScreen && <motion.div initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: 1 }} className="w-full mt-8">
                        <img src={selectedImg} alt="Selected" className="selected-img-box object-cover" style = {{height:'100%' }}/>
                        <div className="img-box md:flex md:justify-between flex justify-between mt-4">
                            {images.map((image, index) => (
                                <img onClick={() => setSelectedImg(image)} style={{ border: selectedImg === image ? "2px solid orange" : "" }} className="object-cover md:w-32 md:h-32 w-28 h-28 mb-2" key={index} src={image} alt="project-image" />
                            ))
                            }
                        </div>
                    </motion.div>}*/}
                </ScrollTrigger>
            </div>

        )
    }
    function ProjectItem() {
        const projects = props.projects;

        return (
            <div className="w-full mt-8">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectLayout title={project.title} id={project.id} expertise={project.expertise} anchorText={project.anchorText} anchorText_2={project.anchorText_2} solution={project.solution} link={project.link} link_2={project.link_2} images={project.images} videoLink={project.videoLink} videoTitle={project.videoTitle} itchEmbed={project.itchEmbed} itchLink={project.itchLink} itchTitle={project.itchTitle}/>

                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className="w-full mt-16 work" id="work">
            <ScrollTrigger onEnter={() => setOnScreen(true)} onExit={() => setOnScreen(false)}>
                <div className="flex flex-col">
                    <div className="accent mx-auto">
                        <motion.div initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: 1 }} className="text-orange-500 mt-12">
                            {onScreen && <IoBriefcaseOutline size={70} />}
                        </motion.div>
                    </div>
                    <div>
                        {onScreen && <motion.h3 initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: .75 }} className="uppercase tracking-widest text-center font-bold text-xl mt-4">work</motion.h3>}
                    </div>
                    <div className="w-full my-4">
                        <div className="flex justify-center">
                            {onScreen && <Divider />}
                        </div>
                    </div>
                </div>
                <motion.div initial={{ y: '100', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: 'tween', duration: 1 }}>
                    {onScreen && <ProjectItem />}
                </motion.div>
            </ScrollTrigger>
        </div>
    );
}

export default WorkSection;