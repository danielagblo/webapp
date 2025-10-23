import React, { useState } from 'react';
import UserIcon from "../assets/User-svgrepo-com2.svg";
import mailbox from "../assets/mailbox-svgrepo-com1.svg";
import googleIcon from "../assets/pngegg(8).svg";
import phone from "../assets/phone-svgrepo-com1.svg";
import password from "../assets/key-square-2-svgrepo-com1.svg"
import password2 from "../assets/key-square-2-svgrepo-com1(1).svg"
import { Link } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreed: false
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreed) {
            newErrors.agreed = 'You must agree to the terms and conditions';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle successful signup
            console.log('Signup successful', formData);
            // Reset form or redirect
        }
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly h-screen items-center px-4 lg:px-44 responsive-container">
            {/* form section for signup */}
            <div className="form-section w-full lg:w-auto">
                <h1 className="text-2xl text-center">Get Started</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>

                    <div className="mt-3 w-full h-[7vh] flex justify-center items-center gap-x-2 border   p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={UserIcon} alt="" className="w-8 h-8" />
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}
                            required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    <div className="mt-3 w-full h-[7vh] flex justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={mailbox} alt="" className="w-8 h-8" />
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color " />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    <div className="mt-3 flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={phone} alt="" className="w-8 h-8" />
                        <input type="tel" name="phone" placeholder="+233" value={formData.phone} onChange={handleInputChange} required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={password} alt="" className="w-8 h-8" />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color" />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none" tabindex="0">
                        <img src={password2} alt="" className="w-8 h-6" />
                        <input type="password" name="confirmPassword" placeholder="Retype Password" value={formData.confirmPassword} onChange={handleInputChange} required
                            className="w-full mt-2 px-4 py-1 text-xl bg-white border-none outline-none text-color" />
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    <div className=" flex justify-center items-center gap-x-2 mt-3 mb-3">
                        <p className="text-color2 text-sm">I have agreed to the terms and conditions of use.</p>
                        <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleInputChange} />
                    </div>
                    {errors.agreed && <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>}
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none btn cursor-pointer" tabindex="0">
                        <input type="submit" value="Sign Up" className="" />
                    </div>
                    <div className="mt-3  flex w-full h-[7vh] justify-center items-center gap-x-2 border  p-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none  cursor-pointer" tabindex="0">
                        <img src={googleIcon} alt="" className="w-8 h-8" />
                        <h1 className="text-color2 text-sm">login using google</h1>
                    </div>
                    <p className="text-center">can login?</p>
                    <div className="flex justify-around">
                        <button className="bg-[#F9F9F9] p-2 rounded-xl text-[#374957]">password Reset </button>
                       <Link to='/optlogin'>
                        <button className="bg-[#F9F9F9] p-2 rounded-xl cursor-pointer">OTP login</button>
                       </Link>
                    </div>
                    <div className="mt-10 ">
                        <Link to='/login' >
                        <h1 className="text-[#374957]">I aleady have an account <span className="text-black font-bold">Login</span></h1>
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
