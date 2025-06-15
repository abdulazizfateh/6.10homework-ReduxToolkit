import React, { useState } from 'react'
import { headerRouteLinks } from "../static";
import { Link, NavLink } from 'react-router-dom';
// Use Selector
import { useSelector } from 'react-redux';
// Icons
import { GoSun } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

// Icon (Logo)
import { IoLogoStencil } from "react-icons/io5";

const Header = () => {
    const likedItems = useSelector(state => state.likedSlice.likedItemsList);
    const cart = useSelector(state => state.cart.cart);
    const [light, setLight] = useState(false || JSON.parse(localStorage.getItem("mode")));
    const root = document.documentElement;
    if (light) {
        root.classList.add("light");
        localStorage.setItem("mode", JSON.stringify(true));
    } else {
        root.classList.remove("light");
        localStorage.setItem("mode", JSON.stringify(false));
    }

    return (
        <header className='site_header sticky w-full top-0 left-0 bg-primary-bg light:bg-primary-bg-light z-20 border-b border-border light:border-border-light'>
            <div className='container mx-auto'>
                <nav className='h-[55px] md:h-[60px] lg:h-[65px] flex items-center justify-between sm:relative'>
                    <div className=''>
                        <Link to={"/"}>
                            <IoLogoStencil className='text-primary-text light:text-primary-text-light text-2xl md:text-3xl cursor-pointer' />
                        </Link>
                    </div>
                    <div className='flex items-center gap-5 md:gap-14 lg:gap-16 xl:gap-20'>
                        <div className='flex items-center gap-5'>
                            {
                                headerRouteLinks.map((item) => (
                                    <div key={item.id}>
                                        <NavLink className="flex items-center gap-1 relative header_link pb-[4px] pt-[8px] sm:py-[4px] text-xs md:text-sm border-b border-b-transparent hover:border-b-[#98a1ae] duration-150 ease-out" to={`${item.route}`}>
                                            {
                                                item.id === 1 ? <IoMdHeartEmpty className='text-[22px]' /> : <IoBagOutline className='text-[22px]' />
                                            }
                                            <div className='absolute top-[-15%] sm:top-[-30%] right-[-50%] size-4 xl:size-[18px] xl:top-[-40%] xl:right-[-60%] bg-highlight-blue rounded-sm flex items-center justify-center border border-[#076082] light:border-[#baecff]'>
                                                <span className='font-medium text-primary-text'>{item.id === 1 ? likedItems.length : cart.length}</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => setLight(prev => !prev)} className='cursor-pointer'>
                                {
                                    light ? <PiMoonLight className='text-[22px]' /> : <GoSun className='text-[22px]' />
                                }
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);