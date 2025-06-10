import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// Fetch hook
import useFetch from '../../hooks/useFetch';
// Use Dispatch
import { useDispatch, useSelector } from 'react-redux';
// Add to Liked Items List
import { addToLikedItems } from '../../redux/features/liked.slice'
// Add to Cart
import { addToCart, removeFromCart } from '../../redux/features/cart.slice';
// Icons
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { PiMinusLight } from "react-icons/pi";

const ProductsDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const likedItems = useSelector(state => state.likedSlice.likedItemsList);
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const { id } = useParams();
    const { data } = useFetch(`/products/${id}`);

    const [isClicked, SetIsClicked] = useState(null);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        SetIsClicked(product.id);
        setTimeout(() => {
            SetIsClicked(null);
        }, 450);
    }

    return (
        <section className='section_product_detail py-8'>
            <div className='container mx-auto'>
                <div className='product_detail_wrapper grid grid-cols-[2fr_1fr] grid-rows-[110px_110px_110px_110px_110px_110px] max-lg:grid-cols-1 max-md:grid-rows-[85px_85px_85px_85px_85px_85px] max-sm:grid-rows-[65px_65px_65px_65px_65px_65px] gap-5'>
                    <div className='bg-secondary-bg light:bg-secondary-bg-light row-span-6 rounded-xl border border-border light:border-border-light p-[15px] max-md:p-[10px] grid grid-cols-6 grid-rows-20 gap-[10px]'>
                        <div className='col-span-6 row-span-1 px-[12px] flex items-center gap-[16px]'>
                            <p className='text-sm max-md:text-[11px]'><span className='underline'>{data?.rating} rating </span><span className='underline'>{data?.reviews?.length}</span><span className='underline'> reviews</span> - <span> {data?.stock} available for order</span>
                            </p>
                        </div>
                        <div className='col-span-6 row-span-15 max-md:row-span-14 max-sm:row-span-12 rounded-xl border border-border light:border-border-light flex items-center justify-center'>
                            <img className='object-cover min-[340px]:object-contain w-full h-full' src={data?.images[0]} alt="" />
                        </div>
                        <div className='rounded-xl col-span-6 row-span-4 max-md:row-span-5 max-sm:row-span-7 border border-border light:border-border-light p-3 max-md:p-2.5'>
                            <h1 className='text-2xl max-md:text-xl mb-[4px] line-clamp-1'>{data?.title}</h1>
                            <p className='text-sm max-md:text-xs capitalize line-clamp-6'>{data?.description}</p>
                        </div>
                    </div>
                    <div className='bg-secondary-bg light:bg-secondary-bg-light row-span-4 rounded-xl border border-border light:border-border-light overflow-hidden flex flex-col'>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-highlight-blue text-[32px] max-md:text-[26px] max-sm:text-[24px]'>${data?.price}</p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Brand:</span> {data?.brand}<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Availability status:</span> {data?.availabilityStatus}</p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Return Policy:</span> {data?.returnPolicy}<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Shipping Information:</span> {data?.shippingInformation}<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                            <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Warranty Information:</span> {data?.warrantyInformation}<span></span></p>
                        </div>
                        <div className='py-3 max-md:py-2.5 flex-1 max-xl:flex-col max-lg:flex-row max-sm:flex-col flex items-end gap-0.5 md:gap-1 max-md:px-2.5 px-3.5 text-primary-text'>
                            <div className='max-xl:flex-1 max-xl:mb-1 xl:flex-1/7 max-lg:mb-0 max-sm:mb-1 flex items-end'>
                                <button onClick={() => dispatch(addToLikedItems(data))} className='w-9 md:w-10 lg:flex-1 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] border border-[#076082] flex items-center justify-center cursor-pointer'>
                                    {
                                        likedItems.some(item => item.id === data?.id) ? <IoMdHeart className='text-lg md:text-xl lg:text-2xl' /> : <IoMdHeartEmpty className='text-lg md:text-xl lg:text-2xl' />
                                    }
                                </button>
                            </div>
                            {
                                cart.some(item => item.id === data?.id) ?
                                    <div className='flex items-center gap-2 flex-6/7 max-xl:flex-none'>
                                        <div className='flex items-center xl:justify-end gap-0.5 lg:gap-1'>
                                            <button onClick={() => dispatch(addToCart(data))} className='size-8 sm:size-9 md:size-10  cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light'>
                                                <IoAdd className='text-primary-text text-sm md:text-base' />
                                            </button>
                                            <button onClick={() => setEditQuantity(true)} className='size-8 sm:size-9 md:size-10  cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light text-xs md:text-sm lg:text-base'>
                                                <span className='text-sm md:text-base lg:text-lg'>{cart?.[0]?.quantity}</span>
                                            </button>
                                            <button onClick={() => dispatch(removeFromCart(data))} className='size-8 sm:size-9 md:size-10  cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light'>
                                                <PiMinusLight className='text-sm md:text-base' />
                                            </button>
                                        </div>
                                        <button className='px-4 md:px-6 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] border border-[#076082] flex items-center justify-center cursor-pointer'>
                                            <span className='text-sm md:text-base xl:text-lg font-medium'>Go to your cart</span>
                                        </button>
                                    </div>
                                    :
                                    <button onClick={() => handleAddToCart(data)} className={`${isClicked === data?.id ? "fly" : ""} px-4 md:px-6 lg:flex-6/7 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue border border-[#076082] hover:bg-[#00bbffd5] flex items-center justify-center cursor-pointer`}>
                                        <span className='text-sm md:text-base lg:text-lg font-medium line-clamp-1'>Add to cart</span>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProductsDetail);