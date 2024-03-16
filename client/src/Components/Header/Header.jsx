import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import logo from '../../../src/assets/logo (1).png'

const Header = () => {
    return (
       <div className="bg-[#D9D9D9]">
         <div className="flex justify-between max-w-6xl mx-auto py-10 ">
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div className="flex gap-6 items-center">
                <div>
                    <h2 className="flex items-center gap-1 text-[#000000] font-medium text-sm"> <AiTwotoneCalendar/> Events</h2>
                </div>

                <div>
                    <h2 className="flex items-center gap-1 text-[#000000] font-medium text-sm"> <IoLocationOutline /> Find Us</h2>
                </div>

                <div>
                    <button className=" btn flex items-center gap-1 text-[#000000] font-medium text-sm border border-[#949392]  rounded-md px-4 py-2"><FiUser /> Sign Up</button>

                </div>
            </div>

        </div>
       </div>
    );
};

export default Header;