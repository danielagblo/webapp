import UserIcon from "../assets/User-svgrepo-com2.svg";
import mailbox from "../assets/mailbox-svgrepo-com1.svg";
import googleIcon from "../assets/pngegg(8).svg";

import password from "../assets/key-square-2-svgrepo-com1.svg"
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="flex justify-evenly h-screen items-center px-44 ">
            {/* form section for signup */}
            <div className="">
                
                <form className="flex flex-col my-20 ">

                   <h1 className="text-2xl text-center">Welcome!</h1>
                    <div className="mt-3 w-full h-[7vh] flex justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={mailbox} alt="" className="w-8 h-8" />
                        <input type="email" placeholder="Email Address" required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                    </div>
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={password} alt="" className="w-8 h-8" />
                        <input type="password" placeholder="Password" required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color" />
                    </div>

                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                        <input type="submit" value="Sign Up" className="" />
                    </div>
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none  cursor-pointer" tabindex="0">
                        <img src={googleIcon} alt="" className="w-8 h-8" />
                        <h1 className="text-color2 text-sm">login using google</h1>
                    </div>
                    <p className="text-center">can login?</p>
                    <div className="flex justify-around">
                       <Link to='/resetpassword' >
                        <button className="bg-[#F9F9F9] p-2 rounded-xl text-[#374957] cursor-pointer">password Reset </button>
                       </Link>
                          <Link to='/optlogin'>
                        <button className="bg-[#F9F9F9] p-2 rounded-xl">OTP login</button>
                       </Link>
                    </div>
                   
                </form>
                 <div className="py-12 ">
                        <Link to='/' >
                        <h1 className="text-[#374957]">I aleady have an account <span className="text-black font-bold">Signup</span></h1>
                        </Link>
                    </div>
            </div>
            {/* background section with written discription */}
            <div className="bg-[#DEFEED] h-[85vh]  w-[50%] mb-6 pt-40 rounded-3xl flex justify-center items-center flex-col  ">
                <h1 className="font-bold text-3xl ">User Safty</h1>
                <h1 className="font-bold text-3xl">Guarantee</h1>
                <p className="text-center text-[#374957]">
                    Buyers and sellers undergo strict<br />
                    checks and verification to ensure<br /> authenticity and reliability
                </p>
                <div className="flex justify-around gap-5 mt-5">
                    <button className="rounded-xl border p-2 border-gray-200 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                    <button className="rounded-xl border p-2 border-gray-200 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                    <button className="rounded-xl border p-2 border-gray-300 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                </div>
                <div>
                    <button className="bg-white border p-2 rounded-xl px-11 mt-14 border-gray-300 focus:border-black focus:outline-none cursor-pointer">Next</button>
                </div>
            </div>
            {/* background section with written discription */}
        </div>
    )
}
