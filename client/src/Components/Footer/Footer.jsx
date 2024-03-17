import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] pt-10"  >
            <div className="flex flex-col  items-center justify-center pb-5 gap-5 md:grid grid-cols-2  md:gap-5 md:pb-5 lg:max-w-4xl lg:mx-auto lg:flex lg:flex-row lg:justify-between lg:items-start lg:pb-10" data-aos="zoom-in" data-aos-duration="3000">

                <div className="flex justify-start flex-col ml-16 lg:ml-0 ">
                    <h2 className="text-white font-semibold mb-3">Study UX</h2>
                    <ul className="flex flex-col justify-start text-[#bebdbd] text-sm leading-7 ">
                        <li className="hover:underline">How to choose your destination?</li>
                        <li className="hover:underline">Study abroad intakes</li>
                        <li className="hover:underline">Guide for parents</li>
                        <li className="hover:underline">THE World University Rankings</li>
                        <li className="hover:underline">Study abroad intakes</li>
                        <li className="hover:underline">QS World University Rankings</li>
                        <li className="hover:underline">SG Events</li>
                        <li className="hover:underline">Institution answers</li>
                        <li className="hover:underline">Student Essentials</li>
                    </ul>
                </div>

                <div className="flex justify-start flex-col">
                    <h2 className="text-white font-semibold mb-3">Useful Links</h2>
                    <ul className="flex flex-col justify-start text-[#bebdbd] text-sm leading-7">
                        <li className="hover:underline">SG Blog</li>
                        <li className="hover:underline">Engineering courses</li>
                        <li className="hover:underline">Health and medicine</li>
                        <li className="hover:underline">Information technology</li>
                        <li className="hover:underline">Management courses</li>
                        <li className="hover:underline">Find Scholarships</li>
                        <li className="hover:underline">Student Reviews</li>
                        <li className="hover:underline">Ask SG</li>
                    </ul>
                </div>


                <div className="flex justify-start flex-col ml-0 md:ml-16 lg:ml-0">
                    <h2 className="text-white font-semibold mb-3">IELTS</h2>
                    <ul className="flex flex-col justify-start text-[#bebdbd] text-sm leading-7">
                        <li className="hover:underline">What is IELTS?</li>
                        <li className="hover:underline">Prepare for IELTS</li>
                        <li className="hover:underline">Computer-delivered IELTS</li>
                        <li className="hover:underline">Book my IELTS test</li>
                        <li className="hover:underline">IELTS for UKVI</li>
                        <li className="hover:underline">IELTS test dates</li>
                        <li className="hover:underline">About SG IELTS</li>
                        <li className="hover:underline">Connect with SG</li>
                        <li className="hover:underline">SG in the news</li>
                    </ul>
                </div>


                <div className="flex justify-start flex-col">
                    <h2 className="text-white font-semibold mb-3">About SG</h2>
                    <ul className="flex flex-col justify-start text-[#bebdbd] text-sm leading-7">
                        <li className="hover:underline">Request an appointment</li>
                        <li className="hover:underline">Contact us</li>
                        <li className="hover:underline">About SG Corporate</li>
                        <li className="hover:underline">SG Career</li>
                        <li className="hover:underline">Customer Grievances</li>
                        <li className="hover:underline">Corporate responsibility</li>
                    </ul>
                </div>

            </div>

            <div className="bg-[#000000] py-5">
                <div className=" text-[#bebdbd] flex flex-col items-center justify-center gap-5 pb-5  lg:max-w-4xl lg:mx-auto lg:flex lg:flex-row lg:justify-between" data-aos="zoom-in" data-aos-duration="3000">
                    <p>Copyright © 2024 SG Education</p>

                    <div>
                        <ul className="flex items-center">
                            <li className="md:border-r-2 px-2">Disclaimer</li>
                            <li className="md:border-r-2 px-2">Privacy Policy</li>
                            <li className="md:border-r-2 px-2">Terms Of Use</li>
                            <li className="md:px-2">Investors</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <CgFacebook />
                        <IoLogoInstagram />
                        <FaLinkedinIn />
                        <FaYoutube />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;