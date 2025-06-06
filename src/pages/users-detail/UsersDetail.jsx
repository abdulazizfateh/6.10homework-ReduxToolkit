import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// Fetch hook
import useFetch from '../../hooks/useFetch';
// Icons
import { PiUserLight } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const UsersDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const { data } = useFetch(`/users/${id}`);
    console.log(data);

    return (
        <section className='section_user_detail'>
            <div className="container mx-auto">
                <div className='users_detail_wrapper w-full h-[92dvh] flex items-center justify-center'>
                    <div key={data?.id} className='users_detail_card bg-secondary-bg light:bg-secondary-bg-light w-[40%] max-[1024px]:w-[60%] max-[768px]:w-85% max-[550px]:w-[90%] max-[450px]:w-full mx-auto rounded-lg overflow-hidden border border-border light:border-border-light'>
                        <div className='h-11 px-3 flex items-center justify-between gap-1 border-b border-b-border light:border-border-light'>
                            <PiUserLight className='text-secondary-text light:text-secondary-text-light text-lg md:text-2xl leading-6 hover:text-highlight-blue duration-300' />
                            {
                                data?.id > 3 && (<RiVerifiedBadgeFill className='text-lg md:text-2xl text-highlight-blue' />)
                            }
                        </div>
                        <div className='h-8 md:h-11 flex items-center border-b border-b-border light:border-border-light'>
                            <p className='px-3 text-[11px] md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-1'>Full name:<span className='text-primary-text light:text-primary-text-light capitalize'> {data?.firstName} {data?.lastName}</span></p>
                        </div>
                        <div className='h-8 md:h-11 flex items-center border-b border-b-border light:border-border-light'>
                            <p className='px-3 text-[11px] md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-1'>Username: <span className='text-highlight-blue cursor-pointer'>@{data?.username}</span></p>
                        </div>
                        <div className='h-8 md:h-11 flex items-center border-b border-b-border light:border-border-light'>
                            <a href='mailto:someone@example.com' className='px-3 text-[11px] md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-1'>Email:<span className='text-highlight-blue cursor-pointer hover:underline'> {data?.email}</span></a>
                        </div>
                        <div className='h-8 md:h-11 flex items-center border-b border-b-border light:border-border-light'>
                            <p className='px-3 text-[11px] md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-1'>Phone Number:<span className='text-primary-text light:text-primary-text-light'> {data?.phone}</span></p>
                        </div>
                        <div className='py-2 md:py-2.5 border-b border-b-border light:border-border-light'>
                            <p className='px-3 text-[11px] md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-3'>Address:<span className='text-highlight-blue cursor-pointer hover:underline'> {data?.address?.address}, {data?.address?.city}, {data?.address?.state}, {data?.address?.country}, {data?.address?.postalCode}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(UsersDetail);