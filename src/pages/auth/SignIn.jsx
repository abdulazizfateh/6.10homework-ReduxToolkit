import React, { useRef, useState } from 'react'
import { IoLogoStencil } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
// Icons
import { GrLinkNext } from "react-icons/gr";
import axios from 'axios';

const SignIn = () => {
    const [invalidAuth, setInvalidAuth] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!(username.trim() === "" || password.trim() === "")) {
            const userCredentials = {
                username,
                password
            }
            axios.post("https://dummyjson.com/auth/login",
                userCredentials,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    navigate("/");
                    localStorage.setItem("token", response.data.accessToken);
                }).catch((error) => {
                    console.log(error);
                    setInvalidAuth(true);
                }).finally(() => {
                    setUsername("");
                    setPassword("");
                })
        }
    }

    return (
        <div className='sign_in_wrapper w-full h-dvh flex items-center justify-center'>
            <form onSubmit={(e) => handleSignIn(e)} className='sign_in_form bg-secondary-bg flex flex-col gap-2 w-[90%] min-[440px]:w-88 sm:w-96 px-3 min-[440px]:px-6 py-5 rounded-lg border border-border'>
                <div className='mb-4 flex items-center justify-center gap-4'>
                    <IoLogoStencil className='text-3xl' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm'>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} autoComplete="true" type="text" className='text-sm border border-[#55595e] rounded-lg px-3.5 p-2.5 outline-none focus:border-white' required placeholder='@emilys' />
                </div>
                <div className='flex flex-col gap-1 mb-1'>
                    <label className='text-sm'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="true" type="password" className='text-sm border border-[#55595e] rounded-lg px-3.5 p-2.5 outline-none focus:border-white' required placeholder='emilyspass' />
                </div>
                <div className='h-5'>
                    {
                        invalidAuth && <p className='text-red-500 text-sm'>These credentials do not match our records.</p>
                    }
                </div>
                <button className='mt-1 mb-6 bg-highlight-blue rounded-4xl border border-[#076082] light:border-[#baecff] hover:bg-[#00bbffd5] duration-150 ease-in cursor-pointer px-3 py-1.5'>
                    <span className='text-[15px] font-medium'>Sign in to account</span>
                </button>
                <div className='text-sm flex items-center gap-2 text-third-text'>Don't have an account? <Link className='flex items-center gap-1 text-primary-text font-medium border-b-[0.8px] border-transparent duration-150 ease-out hover:border-primary-text'>Sign Up <GrLinkNext /></Link></div>
            </form>
        </div>
    )
}

export default React.memo(SignIn);