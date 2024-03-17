import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import logo from '../../../src/assets/logo (1).png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className="bg-[#D9D9D9]">
            <div className="flex py-10 flex-col gap-5 justify-center items-center lg:flex-row lg:justify-between lg:max-w-6xl mx-auto  " data-aos="zoom-in-up"data-aos-duration="3000" >
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div className="flex gap-6 items-center">
                    <div>
                        <h2 className="flex items-center gap-1 text-[#000000] font-medium text-sm"> <AiTwotoneCalendar /> Events</h2>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-1 text-[#000000] font-medium text-sm"> <IoLocationOutline /> Find Us</h2>
                    </div>

                    <div>
                        {
                            user ? <>

                                <button onClick={handleLogOut} className="btn flex items-center gap-1 text-[#000000] font-medium text-sm border border-[#949392]  rounded-md px-4 py-2">LogOut</button>

                            </>
                                :
                                <>
                                    <Link to="/signup">
                                        <button className=" btn flex items-center gap-1 text-[#000000] font-medium text-sm border border-[#949392]  rounded-md px-4 py-2"><FiUser /> Sign Up</button>
                                    </Link>
                                </>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;