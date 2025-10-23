import React, { useState } from 'react';
import UserIcon from "../assets/User-svgrepo-com2.svg";




import { Link } from 'react-router-dom';

export default function OPTLogin() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [errors, setErrors] = useState({});

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; // Only allow single digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Clear error when user starts typing
        if (errors.otp) {
            setErrors(prev => ({
                ...prev,
                otp: ''
            }));
        }

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const validateOtp = () => {
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            return 'Please enter all 6 digits of the OTP';
        }
        if (!/^\d{6}$/.test(otpString)) {
            return 'OTP must contain only numbers';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpError = validateOtp();
        if (otpError) {
            setErrors({ otp: otpError });
        } else {
            // Handle successful OTP verification
            console.log('OTP verified:', otp.join(''));
            // Reset form or redirect
        }
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly h-screen items-center px-4 lg:px-44 responsive-container">
            {/* form section for signup */}
            <div className="form-section w-full lg:w-auto">

                <form className="flex flex-col my-20" onSubmit={handleSubmit}>

                    <h1 className="text-2xl text-center">OTP Login</h1>
                    <div className="flex flex-row gap-3 mt-3.5">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-14 h-14 text-center text-xl font-medium border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        ))}
                    </div>
                    {errors.otp && <p className="text-red-500 text-sm mt-1 text-center">{errors.otp}</p>}
                    <p className="text-center text-[#374957] mt-2.5">
                        We’ll send a verification link to the<br /> number if it's being in our system
                    </p>
                    <div className="mt-11  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                        <input type="submit" value="Verify" className="" />
                    </div>

                    <p className="text-center mt-3">can login?</p>
                    <div className="flex justify-around">
                        <Link to='/resetpassword' >
                            <button className="bg-[#F9F9F9] p-2 rounded-xl text-[#374957] cursor-pointer">password Reset </button>
                        </Link>
                        <Link to='/login'>
                            <button className="bg-[#F9F9F9] p-3 rounded-xl cursor-pointer">login</button>
                        </Link>
                    </div>

                </form>

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
