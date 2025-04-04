    import {IoMailOutline, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub} from "react-icons/io5"
const Footer = () => {
    return (
        <div className="mt-12 mb-12">
            <div>
                <h1 className="text-3xl md:text-5xl text-center font-bold">Get in touch with me.</h1>
            </div>
            <div className="w-full">
                <img className="mx-auto mt-4 mb-4" src="/brush-border.svg" alt="" />
            </div>
            <div className=" text-neutral-700 flex items-center justify-center space-x-10 mb-10 mt-10">
                <a href="https://roosekasimba@gmail.com"><div className="hover:text-orange-500"><IoMailOutline size={40}/></div></a>
                <a href="https://x.com/DevRoose"><div className="hover:text-orange-500"><IoLogoTwitter size={40}/></div></a>
                <a href="https://www.instagram.com/terrifikgamestudios/"><div className="hover:text-orange-500"><IoLogoInstagram size={40}/></div></a>
                <a href="https://www.linkedin.com/in/roosevelt-kasimba-mwandira-1481a028b"><div className="hover:text-orange-500"><IoLogoLinkedin size={40}/></div></a>
                <a href="https://github.com/RooseViper"><div className="hover:text-orange-500"><IoLogoGithub size={40}/></div></a>
            </div>
            <p className="text-center text-neutral-700">Roosevelt Kasimba Mwandira &copy; 2025 All Rights Reserved</p>
        </div>
    );
}

export default Footer;