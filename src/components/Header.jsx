import React, { useState, useEffect } from 'react'
import { headerRouteLinks } from "../static";
import { NavLink } from 'react-router-dom';
// Use Selector
import { useSelector } from 'react-redux';
// Icons
import { GoSun } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";

const Header = () => {
    const likedItems = useSelector(state => state.likedSlice.likedItemsList);
    const uniqueCart = useSelector(state => state.cart.uniqueCart);
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
                <nav className='h-[55px] md:h-[60px] flex items-center justify-between sm:justify-end sm:relative'>
                    <ul className='flex items-center gap-[12px] sm:absolute sm:top-1/2 sm:right-1/2 sm:-translate-y-[50%] sm:translate-x-[50%]'>
                        {
                            headerRouteLinks.map((item) => (
                                <li key={item.id}>
                                    <NavLink className={`${(item.id === 4 || item.id === 5) ? "flex gap-1" : ""} header_link pb-[4px] pt-[8px] sm:py-[4px] text-xs md:text-sm border-b border-b-transparent hover:border-b-[#98a1ae] duration-150 ease-out`} to={`${item.route}`}>
                                        <span>{item.title}</span>
                                        {
                                            item.id === 4 &&
                                            <div className='size-4 sm:size-5 rounded-sm border border-[#046082] light:border-highlight-blue bg-highlight-blue flex items-center justify-center'>
                                                <span className='text-xs md:text-sm text-primary-text'>{likedItems.length}</span>
                                            </div>
                                        }
                                        {
                                            item.id === 5 &&
                                            <div className='size-4 sm:size-5 rounded-sm border border-[#046082] light:border-highlight-blue bg-highlight-blue flex items-center justify-center'>
                                                <span className='text-xs md:text-sm text-primary-text'>{uniqueCart.length}</span>
                                            </div>
                                        }

                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='flex items-center gap-2'>
                        <button onClick={() => setLight(prev => !prev)} className='cursor-pointer size-7 md:size-8 rounded-md bg-border light:bg-secondary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent'>
                            {
                                light ? <PiMoonLight /> : <GoSun />
                            }
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);