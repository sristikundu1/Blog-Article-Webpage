import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  
    const { signUp,googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

     

        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/.test(password)) {
            toast.error("please give strong password")
            return;
        }
        else {
            signUp(email, password).then((result) => {
                console.log(result.user);
                toast.success("user created successfully")
                navigate(location?.state ? location.state : "/")
            })
        }


    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/13/0b/d6/130bd6e30437a7b8cc3179bb08d82e56.gif)' }}>
                {/* <div className="hero-overlay "></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-[500px]">
                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center text-white mb-4 ">SignUp</h2>
                            <div className="border rounded-lg">
                                <img className="h-80 md:w-[500px]" src="https://www.skacas.ac.in/wp-content/uploads/2020/02/tenor.gif" alt="" />


                                <form className="bg-[#0081a7] p-4"
                                    onSubmit={handleSignUp}
                                >
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-teal-200 font-semibold">Name</span>
                                        </label>
                                        <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Name" type="text" name="name" id="name" />
                                    </div>

                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-teal-200 font-semibold">Email</span>
                                        </label>
                                        <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                                    </div>

                                    <div className=" relative">
                                        <label className="label">
                                            <span className="label-text text-teal-200 font-semibold">Password</span>
                                        </label>

                                        <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                                        <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                        </span>

                                    </div>


                                    <input className="btn btn-block bg-[#e7c6ff] text-[#00509d] border-none  capitalize mt-3  font-bold text-xl" type="submit" value="SignUp" />

                                </form>
                            </div>

                            {/* {
                                signUpError && <p>{signUpError}</p>

                            }
                            {
                                success && <p>{success}</p>

                            } */}


                            <div className=" flex flex-col justify-center items-center  ">
                                <Link to="/login">
                                    <p className="text-teal-200 font-bold	text-center mt-2">Already have account? Login</p>
                                </Link>
                                <h2 className="text-center text-teal-200 mt-3">Or sign up with</h2>


                                <div className="flex gap-6 text-3xl mt-2">

                                    <Link to="/">
                                        <button
                                            onClick={handleClickGoogle}
                                            className="btn bg-[#e7c6ff] text-[#00509d]">
                                            LogIn with Google
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

export default SignUp;