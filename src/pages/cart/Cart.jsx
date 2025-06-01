import React from 'react'
import { useStateValue } from '../../context'
import ProductCards from '../../components/ProductCards';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [state] = useStateValue();
  const data = state.cart;
  const navigate = useNavigate();
  return (
    <>
      {
        data.length > 0 ? <ProductCards data={data} /> :
          <section className='section_liked'>
            <div className='container mx-auto w-full h-[92dvh] flex flex-col gap-3 items-center justify-center'>
              <p className='text-sm md:text-base lg:text-lg w-[90%] mx-auto sm:w-full sm:mx-0 text-center'>Add your favourite items to the list</p>
              <p className='text-xs lg:text-sm w-[90%] mx-auto sm:w-full sm:mx-0 text-secondary-text text-center'>Tap the ♡ icon on the product and all your favorites will be saved.</p>
              <button onClick={() => navigate("/products")} className='px-4 py-2 rounded-lg border border-border bg-secondary-bg cursor-pointer'>
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