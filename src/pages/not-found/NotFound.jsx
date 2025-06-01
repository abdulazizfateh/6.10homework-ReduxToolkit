import React from 'react'
// Icons
import { Link } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <section className='section_notfound text-white'>
      <div className='container mx-auto'>
        <div className='notfound_wrapper w-full h-[92dvh]'>
          <div className='h-[55px] md:h-[70px] flex items-center'>
            <Link to={"/"} className='text-white flex items-center gap-0.5'>
              <span className='size-9 rounded-lg border border-transparent bg-transparent duration-100 hover:border-border active:bg-secondary-bg flex items-center justify-center pr-0.5'>
                <IoChevronBackSharp className='text-5 md:size-6' />
              </span>
            </Link>
          </div>
          <div className='w-full pt-20 sm:pt-26 flex flex-col items-center justify-center'>
            <p className='text-2xl sm:text-3xl lg:text-5xl text-red-500 text-center'>404 Error</p>
            <p className='text-xl sm:text-2xl lg:text-4xl text-center'>Page not found</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(NotFound);