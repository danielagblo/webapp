import React, { useState } from 'react';
import UserIcon from "../assets/User-svgrepo-com2.svg";
import phone from "../assets/phone-svgrepo-com1.svg";
import { Link } from 'react-router-dom';
export default function RestPassword() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);
        // Clear error when user starts typing
        if (errors.phone) {
            setErrors(prev => ({
                ...prev,
                phone: ''
            }));
        }
    };

    const validatePhone = () => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneNumber) {
            return 'Phone number is required';
        } else if (!phoneRegex.test(phoneNumber)) {
            return 'Please enter a valid phone number';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneError = validatePhone();
        if (phoneError) {
            setErrors({ phone: phoneError });
        } else {
            // Handle successful password reset request
            console.log('Password reset requested for phone:', phoneNumber);
            // Reset form or redirect
        }
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly h-screen items-center px-4 lg:px-44 responsive-container">
            {/* form section for signup */}
            <div className="form-section w-full lg:w-auto">
                <form className="flex flex-col my-10 lg:my-20" onSubmit={handleSubmit}>

                    <h1 className="text-2xl text-center">Reset Password</h1>
                     <div className="mt-3 w-full h-[7vh] flex justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                         <img src={phone} alt="" className="w-8 h-8" />
                         <input type="tel" name="phone" placeholder="+1233" value={phoneNumber} onChange={handleInputChange} required
                             className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                     </div>
                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      <p className="text-center text-xl mt-2 text-gray-500">
                         We’ll send a verification link to the<br/> number if it's being in our system
                      </p>
                     <div className="mt-11  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                         <input type="submit" value="Submit" className="" />
                     </div>
                    <p className="text-center">can login?</p>
                    <div className="flex justify-around">
                        <button className="bg-[#F9F9F9] p-2 rounded-xl text-[#374957] cursor-pointer">password Reset </button>
                        <button className="bg-[#F9F9F9] p-2 rounded-xl  cursor-pointer">OTP login</button>
                    </div>
                   
                </form>
                 <div className="py-12 ">
                        <Link to='/' >
                        <h1 className="text-[#374957]">I aleady have an account <span className="text-black font-bold">Signup</span></h1>
                        </Link>
                    </div>
            </div>
            {/* background section with written discription */}
            <div className="bg-[#DEFEED] h-[60vh] lg:h-[85vh] w-full lg:w-[50%] mt-6 lg:mt-0 lg:mb-6 pt-20 lg:pt-40 rounded-3xl flex justify-center items-center flex-col sidebar-section">
                <h1 className="font-bold text-2xl lg:text-3xl">User Safety</h1>
                <h1 className="font-bold text-2xl lg:text-3xl">Guarantee</h1>
                <p className="text-center text-[#374957] text-sm lg:text-base">
                    Buyers and sellers undergo strict<br />
                    checks and verification to ensure<br /> authenticity and reliability
                </p>
                <div className="flex justify-around gap-3 lg:gap-5 mt-5">
                    <button className="rounded-xl border p-2 border-gray-200 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                    <button className="rounded-xl border p-2 border-gray-200 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                    <button className="rounded-xl border p-2 border-gray-300 bg-gray-200 focus:bg-black focus:outline-none">
                    </button>
                </div>
                <div>
                    <button className="bg-white border p-2 rounded-xl px-8 lg:px-11 mt-10 lg:mt-14 border-gray-300 focus:border-black focus:outline-none cursor-pointer">Next</button>
                </div>
            </div>
            {/* background section with written discription */}
        </div>
    )
}


