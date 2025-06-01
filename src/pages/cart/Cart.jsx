import React, { useEffect } from 'react'
import ProductCards from '../../components/ProductCards';
import { useNavigate } from 'react-router-dom';
// Use Selector
import { useSelector } from 'react-redux';
// Use Dispatch
import { useDispatch } from 'react-redux';
// Add to Cart
import { addToCart } from '../../redux/features/cart.slice';
// Remove From Cart
import { removeFromCart } from '../../redux/features/cart.slice'
// Add to Liked Items List
import { addToLikedItems } from '../../redux/features/liked.slice'
// Icons
import { BsCart } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { PiMinusLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";


const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.cart);
  const uniqueCart = useSelector(state => state.cart.uniqueCart);

  console.log(uniqueCart);
  console.log(cart);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  // Add to Liked List
  const likedItems = useSelector(state => state.likedSlice.likedItemsList);
  const handleLikedItem = (product) => {
    dispatch(addToLikedItems(product));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <section className='section_product_detail py-8'>
        <div className='container mx-auto'>
          <p className='text-primary-text text-base md:text-lg lg:text-xl mb-2 md:mb-3'>Your cart, <span className='text-secondary-text'>products</span></p>
          <div className='product_detail_wrapper grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 gap-5 max-xl:gap-2 max-lg:gap-5'>
            <div className='border-t border-l border-r border-border flex flex-col rounded-xl bg-secondary-bg'>
              {
                uniqueCart.map(product => (
                  <div key={product.id} className='flex items-center gap-4 border-b border-border px-2 py-3 sm:px-3 sm:py-4 md:px-5 md:py-5'>
                    <div className='flex-2/7 sm:flex-1/6'>
                      <img onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer w-full h-full object-cover' src={product.thumbnail} alt="" />
                    </div>
                    <div className='flex-5/7 sm:flex-5/6'>
                      <p onClick={() => navigate(`/products/${product.id}`)} className='cursor-pointer hover:underline duration-150 text-xs md:text-sm text-primary-text line-clamp-1 mb-1'>{product.title}</p>
                      <p className='text-xs md:text-sm text-secondary-text line-clamp-2 mb-3 md:mb-4'>{product.description}</p>
                      <div className='flex items-center gap-2 justify-between'>
                        <div className='flex items-center gap-0.5'>
                          <button onClick={() => handleAddToCart(product)} className='size-8 cursor-pointer rounded-md bg-border flex items-center justify-center border border-[#3d444d] hover:bg-transparent'>
                            <IoAdd />
                          </button>
                          <button className='size-8 cursor-pointer rounded-md bg-border flex items-center justify-center border border-[#3d444d] hover:bg-transparent'>
                            {uniqueCart.length}
                          </button>
                          <button onClick={() => handleRemoveFromCart(product)} className='size-8 cursor-pointer rounded-md bg-border flex items-center justify-center border border-[#3d444d] hover:bg-transparent'>
                            <PiMinusLight />
                          </button>
                        </div>
                        <div>
                          <button onClick={() => handleLikedItem(product)} className='size-8 cursor-pointer rounded-md bg-border flex items-center justify-center border border-[#3d444d] hover:bg-transparent'>
                            {
                              (likedItems.some(item => item.id === product.id)) ?
                                <IoMdHeart className='text-highlight-blue' />
                                : <IoMdHeartEmpty className='text-highlight-blue' />
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='h-[180px] md:h-[240px] lg:h-[270px] rounded-xl border border-border overflow-hidden flex flex-col max-[1024px]:w-1/2 max-[640px]:w-2/3 max-[450px]:w-1/1 bg-secondary-bg'>
              <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Your orders ({cart.length}):</span></p>
              </div>
              <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border flex gap-4 items-center justify-between max-lg:justify-start'>
                <p className='text-sm max-md:text-[11px] text-secondary-text'>Total:</p>
                <p className='text-highlight-blue text-[26px] max-md:text-[22px] max-sm:text-[20px]'>${uniqueCart?.price}98</p>
              </div>
              <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-border'>
                <p className='text-sm max-md:text-[11px]'><span className='text-secondary-text'>Discount:</span> 0<span></span></p>
              </div>
              <div className='py-3 max-md:py-2.5 flex-1 flex items-end gap-0.5 md:gap-1 max-lg:items-end max-md:px-2.5 px-3.5'>
                <button className='px-4 md:px-6 lg:flex-1 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-highlight-blue hover:bg-[#00bbffd5] flex items-center justify-center cursor-pointer'>
                  <span className='text-sm md:text-base xl:text-lg font-medium'>Go to checkout</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <section className='section_cart'>
            <div className='container mx-auto w-full h-[92dvh] flex flex-col gap-3 items-center justify-center'>
              <BsCart className='text-secondary-text text-3xl lg:text-4xl' />
              <p className='text-sm md:text-base lg:text-lg w-[90%] mx-auto sm:w-full sm:mx-0 text-center'>Your cart is empty</p>
              <p className='text-xs lg:text-sm w-[90%] mx-auto sm:w-full sm:mx-0 text-secondary-text text-center'>Tap the + icon on the product to add a product</p>
              <button onClick={() => navigate("/products")} className='px-4 py-2 rounded-lg border border-border bg-secondary-bg cursor-pointer'>
                <span className='text-xs md:text-sm'>
                  Back to Products
                </span>
              </button>
            </div>
          </section> */}
    </>
  )
}

export default React.memo(Cart);