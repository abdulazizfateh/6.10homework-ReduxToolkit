import React, { useEffect } from 'react'
import ProductCards from '../../components/ProductCards';
import { useNavigate } from 'react-router-dom';
// Icons
import { BsCart } from "react-icons/bs";
// Use Selector
import { useSelector } from 'react-redux';

const Liked = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate();
  const likedItems = useSelector(state => state.likedSlice.likedItemsList);
  return (
    <>
      {
        likedItems.length > 0 ? <ProductCards data={likedItems} /> :
          <section className='section_liked'>
            <div className='container mx-auto w-full h-[92dvh] flex flex-col gap-3 items-center justify-center'>
              <BsCart className='text-secondary-text light:text-secondary-text-light text-3xl lg:text-4xl' />
              <p className='text-sm md:text-base lg:text-lg w-[90%] mx-auto sm:w-full sm:mx-0 text-center'>Add your favourite items to the list</p>
              <p className='text-xs lg:text-sm w-[90%] mx-auto sm:w-full sm:mx-0 text-secondary-text light:text-secondary-text-light text-center'>Tap the ♡ icon on the product and all your favorites will be saved.</p>
              <button onClick={() => navigate("/products")} className='px-4 py-2 rounded-lg border border-border light:border-border-light bg-secondary-bg light:bg-secondary-bg-light cursor-pointer hover:bg-transparent duration-150'>
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

export default React.memo(Liked);