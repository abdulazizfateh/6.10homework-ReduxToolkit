import React from 'react'
// Icons
import { PiUserLight } from "react-icons/pi";

const LoadingUserCards = () => {
    const loadingUsers = Array(10).fill("");
    return (
        <div className='users_wrapper grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 gap-x-1.5 gap-y-4 sm:gap-y-3 lg:gap-x-2.5 lg:gap-y-4 min-[700px]:gap-2 min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
            {
                loadingUsers?.map((_, index) => (
                    <div key={index} className='users_card bg-secondary-bg rounded-[8px] overflow-hidden border border-border'>
                        <div className='h-10 px-2 sm:px-3 flex items-center gap-[4px] border-b border-b-border'>
                            <p>
                                <PiUserLight className='text-secondary-text text-lg md:text-2xl leading-6 hover:text-highlight-blue duration-300' />
                            </p>
                        </div>
                        <div className='h-8 md:h-10 flex items-center border-b border-b-border'>
                            <p className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>First Name:</p>
                        </div>
                        <div className='h-8 md:h-10 flex items-center border-b border-b-border'>
                            <p className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>Last Name:</p>
                        </div>
                        <div className='h-8 md:h-10 flex items-center'>
                            <p className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>Username:</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default React.memo(LoadingUserCards);