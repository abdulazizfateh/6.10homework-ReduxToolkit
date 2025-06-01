import React from 'react'
import { footerLinks } from '../static';

const Footer = () => {
    return (
        <footer className="site_footer border-t border-border">
            <div className="container mx-auto">
                <div className="footer_wrapper py-8 grid grid-cols-1 min-[430px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 border-y-[.5px] border-border mb-5 sm:mb-8">
                    {
                        footerLinks?.map((row) => (
                            <div style={{ borderRight: `${row.border}` }} key={row.id} className="px-[0px] min-[430px]:px-3 sm:px-4">
                                <p className="text-xs sm:text-sm mb-2 sm:mb-4 capitalize">{row.category}</p>
                                <ul className="flex flex-col gap-[2px] sm:gap-2 h-full">
                                    {
                                        row.items.map((link, index) => (
                                            <li key={index}><span className='text-xs sm:text-sm text-third-text cursor-pointer border-b-[0.6px] border-transparent hover:border-b-highlight-blue pb-0.5 duration-200 ease-out'>{link}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);