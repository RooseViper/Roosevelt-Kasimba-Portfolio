    import {IoMailOutline, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook} from "react-icons/io5"
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
                <a href="https://roosemwandira@gmail.com"><div className="hover:text-orange-500"><IoMailOutline size={40}/></div></a>
                <a href="https://twitter.com/DevRoose"><div className="hover:text-orange-500"><IoLogoTwitter size={40}/></div></a>
                <a href="https://www.instagram.com/terrifikgamestudios/"><div className="hover:text-orange-500"><IoLogoInstagram size={40}/></div></a>
                <a href="https://www.linkedin.com/in/roosevelt-mwandira-722854247"><div className="hover:text-orange-500"><IoLogoLinkedin size={40}/></div></a>
                <a href="https://www.facebook.com/luz.jayr"><div className="hover:text-orange-500"><IoLogoFacebook size={40}/></div></a>
            </div>
            <p className="text-center text-neutral-700">Roosevelt Mwandira &copy; 2022 All Rights Reserved</p>
        </div>
    );
}

export default Footer;