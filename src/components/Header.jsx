import React from 'react'
import { headerRouteLinks } from "../static";
import { NavLink } from 'react-router-dom';
// Use Selector
import { useSelector } from 'react-redux';

const Header = () => {
    const likedItems = useSelector(state => state.likedSlice.likedItemsList);
    const uniqueCart = useSelector(state => state.cart.uniqueCart);
    return (
        <header className='site_header sticky w-full top-0 left-0 z-20 bg-primary-bg border-b border-border'>
            <div className='container mx-auto'>
                <nav className='h-[55px] md:h-[60px] flex items-center justify-center'>
                    <ul className='flex items-center gap-[12px]'>
                        {
                            headerRouteLinks.map((item) => (
                                <li key={item.id}>
                                    <NavLink className={`${(item.id === 4 || item.id === 5) ? "relative flex items-center gap-1" : ""} header_link text-xs md:text-sm py-[4px] border-b-[.8px] border-b-transparent hover:border-b-[#98a1ae] duration-150 ease-out`} to={`${item.route}`}>
                                        <span>{item.title}</span>
                                        {
                                            item.id === 4 &&
                                            <div className='size-5 rounded-sm border border-[#046082] bg-highlight-blue flex items-center justify-center'>
                                                <span className='text-xs md:text-sm'>{likedItems.length}</span>
                                            </div>
                                        }
                                          {
                                            item.id === 5 &&
                                            <div className='size-5 rounded-sm border border-[#046082] bg-highlight-blue flex items-center justify-center'>
                                                <span className='text-xs md:text-sm'>{uniqueCart.length}</span>
                                            </div>
                                        }
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);