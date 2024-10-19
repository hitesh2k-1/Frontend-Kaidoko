import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-[#094C3D] to-[#116955]  text-white">
            <div className="w-full md:max-w-[85vw] m-auto py-10 px-10 sm:px-0 flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center  ">
                <div>
                    <h3 className="text-3xl font-semibold mb-5">Contact Us</h3>
                    <p>Plot No. 12, ABC Pocket, Sector-08, Uttam Nagar,<br /> New Delhi - 110058</p>
                    <p className="flex items-center my-3">
                        <span className="mr-2"><IoCall />
                        </span> (+91) 9876543210
                    </p>
                    <p className="flex items-center mt-2">
                        <span className="mr-2"><IoMail />
                        </span> contactedu@gmail.com
                    </p>
                </div>

                <div className="flex gap-20 justify-between  max-w-[80vw]" >
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com" aria-label="Facebook" className=" text-white transition-transform duration-300 transform hover:scale-125">
                                <FaFacebookSquare size={30} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className=" text-white transition-transform duration-300 transform hover:scale-125">
                                <FaSquareXTwitter size={30} />

                            </a>
                        </div>
                    </div>
                    <div className="flex items-end gap-20">
                        <Image height={165} width={100} src="/images/bigbot.png" alt="" className="transition-transform transform hover:-translate-y-2 cursor-pointer " />
                        <Image className="hidden lg:block transition-transform transform hover:-translate-y-2 cursor-pointer" height={72} width={72} src="/images/chatbot.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#A3E659] h-[13px] w-full"></div>
        </footer>
    )
}

export default Footer;
