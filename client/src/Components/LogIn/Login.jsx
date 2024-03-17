import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

   
  

    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

       

        if ((email, password)) {
            logIn(email, password)
                .then((result) => {
                    console.log(result.user);
                   
                    toast.success("user loged successfully")

                    navigate(location?.state ? location.state : "/")
                })
                .catch(error => {
                    console.error(error);
                 
                    toast.error(error.message);
                })
        }

    }


    return (
        <div>

            <div className="bg-white h-screen">

                <div className="max-w-6xl mx-auto pt-2 mb-28">

                    <div className="flex flex-col mt-10 border-t-4 border-white  border-b-8 border-r-8 shadow-2xl pt-9  pb-4  md:grid grid-cols-7 pr-7  ">

                        <div className=" md:col-span-4">
                            <img src="https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg" alt="" />
                        </div>

                        <div className="pl-7 md:col-span-3">
                            <h2 className="font-bold text-3xl text-center text-[#fb5607]">Login</h2>

                            <form
                                onSubmit={handleLogIn}
                            >
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Email</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                                </div>

                                <div className=" relative">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Password</span>
                                    </label>

                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                                    <span className='absolute top-14 right-3' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                    </span>

                                </div>


                                <input className="btn btn-block bg-[#3a86ff] text-white  capitalize mt-5 font-bold text-xl " type="submit" value="Login" />

                            </form>


                            <div className=" flex flex-col justify-center items-center mt-3 ">
                                <Link to="/signup">
                                    <p className="text-[#fb5607] font-bold	text-center mt-2">New here? Create a New Account</p>
                                </Link>
                                <h2 className="text-center mt-3">Or Log in with</h2>


                                <div className="flex gap-6 text-3xl mt-2">

                                    <Link to="/">
                                        <button
                                             onClick={handleClickGoogle}  
                                            className="btn bg-[#bbd0ff] font-semibold">
                                            LogIn With Google
                                            <FcGoogle></FcGoogle>
                                        </button>

                                    </Link>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;