import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { IoMdHeartEmpty } from "react-icons/io";
// Use Dispatch
import { useDispatch } from 'react-redux';
// Add to Liked Items List
import { addToLikedItems } from '../../redux/features/liked.slice'

const ProductsDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const { data } = useFetch(`/products/${id}`);

    const dispatch = useDispatch();

    return (
        <section className='section_product_detail py-8'>
            <div className='container mx-auto'>
                <div className='product_detail_wrapper grid grid-cols-[2fr_1fr] grid-rows-[110px_110px_110px_110px_110px_110px] max-lg:grid-cols-1 max-md:grid-rows-[85px_85px_85px_85px_85px_85px] max-sm:grid-rows-[65px_65px_65px_65px_65px_65px] gap-5'>
                    <div className='bg-secondary-bg row-span-6 rounded-xl border border-border p-[15px] max-md:p-[10px] grid grid-cols-6 grid-rows-20 gap-[10px]'>
                        <div className='col-span-6 row-span-1 px-[12px] flex items-center gap-[16px]'>
                            <p className='text-sm max-md:text-[11px]'><span className='underline'>{data?.rating?.rate}</span><span className='underline'> reviews</span> - <span> Available for order</span>
                            </p>
                        </div>
                        <div className='col-span-6 row-span-15 max-md:row-span-14 max-sm:row-span-12 rounded-xl border border-border flex items-center justify-center'>
                            <img className='object-cover min-[340px]:object-contain w-full h-full' src={data?.image} alt="" />
                        </div>
                        <div className='rounded-xl col-span-6 row-span-4 max-md:row-span-5 max-sm:row-span-7 border border-border p-3 max-md:p-2.5'>
                            <h1 className='text-2xl max-md:text-xl mb-[4px] line-clamp-1'>{data?.title}</h1>
                            <p className='text-sm max-md:text-xs capitalize line-clamp-6'>{data?.description}</p>
                        </div>
                    </div>
                    <div className='bg-secondary-bg row-span-4 rounded-xl border border-border overflow-hidden flex flex-col'>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-[hotpink] text-[32px] max-md:text-[26px] max-sm:text-[24px]'>${data?.price}</p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Brand:</span> Not Found<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Availability status:</span> Not Found</p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Return Policy:</span> Not Found<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Shipping Information:</span> Not Found<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Warranty Information:</span> Not Found<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2.5 flex-1 flex items-end gap-0.5 md:gap-1 max-lg:items-end max-md:px-2.5 px-3.5'>
                            <button onClick={() => dispatch(addToLikedItems(data))} className='w-9 md:w-10 lg:flex-1/7 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] flex items-center justify-center cursor-pointer'>
                                <IoMdHeartEmpty className='text-lg md:text-xl lg:text-2xl' />
                            </button>
                            <button className='px-4 md:px-6 lg:flex-6/7 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] flex items-center justify-center cursor-pointer'>
                                <span className='text-sm md:text-base lg:text-lg font-medium'>Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProductsDetail);