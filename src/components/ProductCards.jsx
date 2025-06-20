import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Loading Product Cards
import LoadingProductCards from "./LoadingProductCards";
// Use Dispatch, Selector
import { useDispatch, useSelector } from 'react-redux';
// Add to Liked Items List
import { addToLikedItems } from '../redux/features/liked.slice'
// Add to Cart
import { addToCart, removeProductCompletely } from '../redux/features/cart.slice'
// Icons
import { IoAdd } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const ProductCards = ({ data, loading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const likedItems = useSelector(state => state.likedSlice.likedItemsList);
    const cart = useSelector(state => state.cart.cart);

    const handleLikedItem = (product) => {
        dispatch(addToLikedItems(product));
    }
    const [isClicked, SetIsClicked] = useState(null);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        SetIsClicked(product.id);
        setTimeout(() => {
            SetIsClicked(null);
        }, 450);
    }
    const handleRemoveFromCart = (product) => {
        dispatch(removeProductCompletely(product));
    }

    return (
        <section className='section_products py-5 md:py-7 lg:py-8 min-h-[92dvh]'>
            <div className="container mx-auto">
                {
                    loading && <LoadingProductCards />
                }
                <div className='products_wrapper grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-1.5 gap-y-[8px] sm:gap-y-3 lg:gap-x-2.5 lg:gap-y-4 min-[700px]:gap-2 min-[480px]:grid-cols-3 min-[1024px]:grid-cols-4 xl:grid-cols-5'>
                    {
                        data?.map((product) => {
                            return <div key={product.id} className='card bg-secondary-bg light:bg-primary-bg-light overflow-hidden rounded-lg border border-border light:border-border-light group'>
                                <div className='card_image bg-border light:bg-secondary-bg-light overflow-hidden relative'>
                                    <img onClick={() => navigate(`/products/${product.id}`)} loading="lazy" className='object-contain min-[320px]:object-cover w-full h-[160px] sm:h-[220px] md:h-[289px] group-hover:scale-[1.03] duration-500' src={product.images[0]} alt={product.title} />
                                </div>
                                <div className='card_body p-2 md:pt-2.5 md:p-3'>
                                    <h4 className='card_title text-xs md:text-sm font-medium h-8 md:h-11 mb-1 line-clamp-2'>{product.title}</h4>
                                    <p className='card_desc text-[10px] md:text-[13px] h-11 md:h-15 sm:min-h-10 text-secondary-text light:text-secondary-text-light mb-3 md:mb-4 capitalize line-clamp-3'>{product.description}</p>
                                    <div className='flex items-center gap-2 justify-between'>
                                        <p className='text-highlight-blue text-xs sm:text-sm'>${product.price}</p>
                                        <div className='flex items-center gap-1'>
                                            <button onClick={() => handleLikedItem(product)} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light light:hover:border-border-hover-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent'>
                                                {
                                                    likedItems.some(item => item.id === product.id) ?
                                                        <IoMdHeart className='text-highlight-blue text-sm md:text-base' />
                                                        : <IoMdHeartEmpty className='text-highlight-blue text-sm md:text-base' />
                                                }
                                            </button>
                                            {
                                                cart.some(item => item.id === product.id) ?
                                                    <button onClick={() => handleRemoveFromCart(product)} className={`${isClicked === product.id ? "fly" : ""} size-7 md:size-8 cursor-pointer rounded-md bg-highlight-blue hover:bg-[#00bbffd5] border border-[#076082] light:border-[#baecff] flex items-center justify-center`}>
                                                        <AiOutlineDelete className='text-sm md:text-base text-white' />
                                                    </button> :
                                                    <button onClick={() => handleAddToCart(product)} className={`${isClicked === product.id ? "fly" : ""} size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light light:hover:border-border-hover-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent`}>
                                                        <IoAdd className='text-sm md:text-base' />
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProductCards);