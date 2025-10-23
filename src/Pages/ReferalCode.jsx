import React, { useState } from 'react';
import UserIcon from "../assets/User-svgrepo-com2.svg";
import hash from "../assets/hashtag-svgrepo-com1.svg";



import { Link } from 'react-router-dom';

export default function ReferalCode() {
    const [referralCode, setReferralCode] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { value } = e.target;
        setReferralCode(value);
        // Clear error when user starts typing
        if (errors.referralCode) {
            setErrors(prev => ({
                ...prev,
                referralCode: ''
            }));
        }
    };

    const validateReferralCode = () => {
        if (!referralCode.trim()) {
            return 'Referral code is required';
        }
        if (referralCode.length !== 6) {
            return 'Referral code must be exactly 6 characters';
        }
        if (!/^[A-Za-z0-9]+$/.test(referralCode)) {
            return 'Referral code can only contain letters and numbers';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const codeError = validateReferralCode();
        if (codeError) {
            setErrors({ referralCode: codeError });
        } else {
            // Handle successful referral code verification
            console.log('Referral code verified:', referralCode);
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
                         <img src={hash} alt="" className="w-8 h-8" />
                         <input  type="text" id="code" name="referralCode" maxlength="6" placeholder="Referral code (Optional)" value={referralCode} onChange={handleInputChange} required
                             className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                     </div>
                     {errors.referralCode && <p className="text-red-500 text-sm mt-1">{errors.referralCode}</p>}

                     <div className="mt-11  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                         <input type="submit" value="Verify" className="" />
                     </div>
                   
                    <div className="flex justify-around mt-3.5">
                        <button className="bg-[#F9F9F9] p-4 rounded-xl text-[#374957] cursor-pointer">Skip </button>
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
