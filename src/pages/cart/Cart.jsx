import React, { useEffect, useState } from 'react'
import ProductCards from '../../components/ProductCards';
import { useNavigate } from 'react-router-dom';
// Use Selector
import { useSelector } from 'react-redux';
// Use Dispatch
import { useDispatch } from 'react-redux';
// Add/Remove to/from Cart
import { addToCart, clearCart, removeFromCart, removeProductCompletely } from '../../redux/features/cart.slice';
// Add to Liked Items List
import { addToLikedItems } from '../../redux/features/liked.slice'
// Icons
import { BsCart } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { PiMinusLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    setTotalPrice((cart.reduce((sum, item) => sum += (item.price * item.quantity), 0).toFixed(2)));
    setTotalDiscount((cart.reduce((sum, item) => sum += item.quantity * ((100 * item.price / (100 - item.discountPercentage)) - item.price), 0)).toFixed(2));
  }, [cart])

  const dispatch = useDispatch();

  // Add to Liked List
  const likedItems = useSelector(state => state.likedSlice.likedItemsList);
  const handleLikedItem = (product) => {
    dispatch(addToLikedItems(product));
  }

  // Clear Cart Confirmation Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearCart = () => {
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(clearCart());
  }
  const handleOutsideClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {
        isModalOpen && (
          <div onClick={(e) => handleOutsideClick(e)} className='modal_overlay fixed inset-0 z-50 flex items-center justify-center bg-[#030712be] light:bg-[#03071287]'>
            <div className='clear_cart_confirmation_modal relative flex flex-col w-[80%] sm:w-[50%] h-36 lg:w-[420px] lg:h-44 bg-secondary-bg light:bg-secondary-bg-light rounded-xl border border-border light:border-border-light p-4 lg:p-5'>
              <p className='font-medium text-xs md:text-sm w-[85%] lg:text-base mb-1 text-primary-text light:text-primary-text-light'>Are you sure you want to delete your cart?</p>
              <p className='text-xs lg:text-sm text-secondary-text light:text-secondary-text-light'>This action cannot be undone</p>
              <button onClick={() => setIsModalOpen(false)} className='absolute top-3 right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light'>
                <IoCloseOutline className='text-lg md:text-xl' />
              </button>
              <div className='flex items-end justify-end gap-2 flex-1'>
                <button onClick={handleCancel} className='flex items-center gap-1.5 px-4 py-2 sm:px-5 md:px-6 rounded-lg border bg-border active:bg-third-text light:bg-primary-bg-light border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light cursor-pointer duration-150'>
                  <span className='text-xs md:text-sm text-primary-text light:text-primary-text-light'>Cancel</span>
                </button>
                <button onClick={handleOk} className='flex items-center gap-1.5 px-4 py-2 sm:px-5 md:px-6 rounded-lg border-[0.5px] bg-highlight-blue hover:bg-[#00bbffd5] active:bg-[#076082] active:bg- border-border-hover cursor-pointer duration-150'>
                  <span className='text-xs md:text-sm light:text-primary-text'>Ok</span>
                </button>
              </div>
            </div>
          </div>
        )
      }
      {
        cart.length > 0 ? <section className='section_product_detail py-8'>
          <div className='container mx-auto'>
            <div className='flex items-center gap-2 justify-between pb-4'>
              <p className='text-primary-text light:text-secondary-text-light text-base md:text-lg lg:text-xl'>Your cart, <span className='text-secondary-text light:text-secondary-text-light'>{cart.length} products</span></p>
              <button onClick={handleClearCart} className='flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg border light:border-border-light border-border light:bg-secondary-bg-light bg-secondary-bg cursor-pointer hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light duration-150'>
                <span className='text-xs md:text-sm text-primary-text light:text-primary-text-light'>
                  Clear your cart
                </span>
                <AiOutlineDelete />
              </button>
            </div>
            <div className='product_detail_wrapper grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 gap-5 max-xl:gap-2 max-lg:gap-5'>
              <div className='border-t border-l border-r border-border self-start light:border-border-light flex flex-col rounded-xl bg-secondary-bg light:bg-secondary-bg-light'>
                {
                  cart.map((product, index) => (
                    <div key={product.id} className={`flex items-center gap-4 ${cart.length === index + 1 ? "" : "border-b-[0.1px]"} border-border-hover px-2 pr-2 py-3 sm:px-3 sm:py-4 md:px-5 md:py-5`}>
                      <div className='flex items-center justify-center'>
                        <img onClick={() => navigate(`/products/${product.id}`)} className='size-18 min-[450px]:size-28 md:size-36 border border-border light:border-border-light rounded-lg light:bg-primary-bg-light bg-primary-bg hover:border-border-hover duration-200  light:hover:border-border-hover-light cursor-pointer object-cover' src={product.thumbnail} alt="" />
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-1'>
                          <div className='flex items-center gap-1'>
                            <p onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer hover:underline duration-150 text-xs md:text-sm text-primary-text light:text-primary-text-light line-clamp-1'>{product.title} </p>
                            <span className='text-highlight-hotpink text-xs md:text-sm'>-{product.discountPercentage}%</span>
                          </div>
                          <button onClick={() => handleLikedItem(product)} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light'>
                            {
                              (likedItems.some(item => item.id === product.id)) ?
                                <IoMdHeart className='text-highlight-blue text-xs md:text-base' />
                                : <IoMdHeartEmpty className='text-highlight-blue text-sm md:text-base' />
                            }
                          </button>
                        </div>
                        <p className='w-[90%] text-xs md:text-sm text-secondary-text light:text-secondary-text-light line-clamp-2 mb-3 md:mb-4'>{product.description}</p>
                        <div className='flex items-center gap-2 justify-between'>
                          <div className='flex items-center gap-0.5'>
                            <button onClick={() => dispatch(addToCart(product))} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light light:active:bg-secondary-text active:bg-secondary-text-light'>
                              <IoAdd className='text-sm md:text-base' />
                            </button>
                            <button onClick={() => setEditQuantity(true)} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light'>
                              <span className='text-xs md:text-sm lg:text-base'>{product.quantity}</span>
                            </button>
                            <button onClick={() => dispatch(removeFromCart(product))} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light light:active:bg-secondary-text active:bg-secondary-text-light'>
                              <PiMinusLight className='text-sm md:text-base' />
                            </button>
                          </div>
                          <div>
                            <p className='text-highlight-blue text-sm sm:text-base lg:text-lg'><span className='text-third-text text-[11px] md:text-xs'>Total for this product: </span>${(product?.price * product?.quantity).toFixed(2)} <del className='text-third-text text-xs sm:text-sm lg:text-base'>${(product?.quantity * (100 * product?.price / (100 - product?.discountPercentage))).toFixed(2)}</del></p>
                          </div>
                          <div>
                            <button onClick={() => dispatch(removeProductCompletely(product))} className='size-7 md:size-8 cursor-pointer rounded-md bg-border light:bg-primary-bg-light flex items-center justify-center border border-[#3d444d] light:border-border-light hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light'>
                              <AiOutlineDelete className='text-sm md:text-base text-secondary-text light:text-secondary-text-light' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='h-[180px] md:h-[240px] lg:h-[270px] rounded-xl border border-border light:border-border-light overflow-hidden flex flex-col max-[1024px]:w-1/2 max-[640px]:w-2/3 max-[450px]:w-1/1 bg-secondary-bg light:bg-secondary-bg-light'>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                  <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Your orders ({cart.length}):</span></p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light flex gap-4 items-center justify-between max-lg:justify-start'>
                  <p className='text-sm max-md:text-[11px] text-secondary-text light:text-secondary-text-light'>Total:</p>
                  <p className='text-highlight-blue text-[26px] max-md:text-[22px] max-sm:text-[20px]'>${totalPrice} <del className='text-third-text text-base md:text-lg'>${(+totalDiscount + +totalPrice).toFixed(2)}</del></p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border light:border-border-light'>
                  <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text light:text-secondary-text-light'>Discount:</span> <span className='text-highlight-hotpink'>-${totalDiscount}</span><span></span></p>
                </div>
                <div className='py-3 max-md:py-2.5 flex-1 flex items-end gap-0.5 md:gap-1 max-lg:items-end max-md:px-2.5 px-3.5'>
                  <button className='px-4 md:px-6 lg:flex-1 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] border border-[#076082] light:border-[#baecff] flex items-center justify-center cursor-pointer'>
                    <span className='text-sm md:text-base xl:text-lg font-medium light:text-primary-text'>Go to checkout</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
          : <section className='section_cart'>
            <div className='container mx-auto w-full h-[92dvh] flex flex-col gap-3 items-center justify-center'>
              <BsCart className='text-secondary-text light:text-secondary-text-light light:text-secondary-text-light-light text-3xl lg:text-4xl' />
              <p className='text-sm md:text-base lg:text-lg w-[90%] mx-auto sm:w-full sm:mx-0 text-center'>Your cart is empty</p>
              <p className='text-xs lg:text-sm w-[90%] mx-auto sm:w-full sm:mx-0 text-secondary-text light:text-secondary-text-light light:text-secondary-text-light-light text-center'>Tap the + icon on the product to add a product</p>
              <button onClick={() => navigate("/")} className='px-3 py-1 md:px-4 md:py-2 rounded-lg border light:border-border-light border-border light:bg-secondary-bg-light bg-secondary-bg cursor-pointer hover:bg-transparent light:hover:bg-primary-bg-light light:hover:border-border-hover-light duration-150'>
                <span className='text-xs md:text-sm'>
                  Back to Products
                </span>
              </button>
            </div>
          </section>
      }
    </>
  )
}

export default React.memo(Cart);