import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import { IoMailOutline, IoBriefcaseOutline } from "react-icons/io5";
const Navbar = () => {

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const isMobile = windowDimension <= 820;
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)


    return (
        <div>
            { !isMobile ?(
            <div className="h-16 w-full justify-between flex items-center border-b border-b-gray-800">
                <div className="w-1/5">
                    <a className="hover:font-bold hover:text-orange-500" href="mailto:roosekasimba@gmail.com?subject=Hello Roose">roosekasimba@gmail.com</a>
                    </div>
                <div className="flex justify-center w-3/5"><h1 className="text-2xl font-bold">Roosevelt Kasimba | Game/XR Developer<span className="accent text-5xl">.</span></h1></div>
                <div className="flex space-x-4 w-1/5 justify-end">
                <Link className="cursor-pointer hover:font-bold hover:text-orange-500" to="work" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Works</Link>
                </div>
            </div>
            ):(
                <div className="h-16 w-full justify-between flex items-center border-b border-b-gray-800">
                <div className="">
                    <a href="mailto:roosekasimba@gmail.com?subject=Hello Roose"><IoMailOutline size={28}/></a>
                    </div>
                <div className="place-self-center"><h1 className="md:text-2xl text-4xl font-bold">R<span className="accent text-5xl">.</span></h1></div>
                <div className="flex space-x-4">
                    <Link to="work" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}><IoBriefcaseOutline size={28}/></Link>
                </div>
            </div>
            )}
        </div>
    );
}
 
export default Navbar;