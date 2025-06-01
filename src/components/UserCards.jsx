import React from 'react'
import { NavLink } from 'react-router-dom';
// Loading User Component
import LoadingUserCards from './LoadingUserCards';
// Icons
import { PiUserLight } from "react-icons/pi";

const UserCards = ({ data, loading }) => {
    return (
        <section className='section_users py-8'>
            <div className='container mx-auto'>
                {
                    loading && <LoadingUserCards />
                }
                <div className='users_wrapper grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 gap-x-1.5 gap-y-4 sm:gap-y-3 lg:gap-x-2.5 lg:gap-y-4 min-[700px]:gap-2 min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
                    {
                        data?.map((user) => (
                            <div key={user.id} className='users_card bg-secondary-bg rounded-[8px] overflow-hidden border border-border'>
                                <div className='h-10 px-2 sm:px-3 flex items-center gap-[4px] border-b border-b-border'>
                                    <NavLink to={`/users/${user.id}`}>
                                        <PiUserLight className='text-secondary-text text-lg md:text-2xl leading-6 hover:text-highlight-blue duration-300' />
                                    </NavLink>
                                </div>
                                <div className='h-8 md:h-10 flex items-center border-b border-b-border'>
                                    <p className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>First Name: <span className='text-white capitalize'>{user.name.firstname}</span></p>
                                </div>
                                <div className='h-8 md:h-10 flex items-center border-b border-b-border'>
                                    <p className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>Last Name: <span className='text-white capitalize'>{user.name.lastname}</span></p>
                                </div>
                                <div className='h-8 md:h-10 flex items-center'>
                                    <NavLink to={`/users/${user.id}`} className='px-2 sm:px-3 text-[11px] md:text-sm text-secondary-text line-clamp-1'>Username: <span className='text-highlight-blue cursor-pointer hover:underline'>@{user.username}</span></NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(UserCards);