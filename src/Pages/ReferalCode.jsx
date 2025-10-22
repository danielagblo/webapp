import UserIcon from "../assets/User-svgrepo-com2.svg";
import hash from "../assets/hashtag-svgrepo-com1.svg";



import { Link } from 'react-router-dom';

export default function ReferalCode() {
    return (
        <div className="flex justify-evenly h-screen items-center px-44 ">
            {/* form section for signup */}
            <div className="">
                
                <form className="flex flex-col my-20 ">

                   <h1 className="text-2xl text-center">Reset Password</h1>
                    <div className="mt-3 w-full h-[7vh] flex justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={hash} alt="" className="w-8 h-8" />
                        <input  type="text" id="code" name="code" maxlength="6" placeholder="Referal code (Optional)" required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                    </div>
                
                    <div className="mt-11  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                        <input type="submit" value="Verify" className="" />
                    </div>
                   
                    <div className="flex justify-around mt-3.5">
                        <button className="bg-[#F9F9F9] p-4 rounded-xl text-[#374957] cursor-pointer">Skip </button>
                    </div>
                
                </form>
              
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
