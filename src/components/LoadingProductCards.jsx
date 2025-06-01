import React from 'react'

const LoadingProducts = () => {
    const loadingProducts = Array(20).fill("");
    return (
        <div className='products_wrapper grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-1.5 gap-y-[8px] sm:gap-y-3 lg:gap-x-2.5 lg:gap-y-4 min-[700px]:gap-2 min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
            {
                loadingProducts.map((_, index) => (
                    <div key={index} className='products_card bg-secondary-bg border border-border rounded-lg overflow-hidden'>
                        <div className='h-[160px] sm:h-[220px] bg-border md:h-[289px]'>
                        </div>
                        <div className='p-2 md:pt-2.5 md:p-3 h-[140px] sm:h-[150px] md:h-[182px]'>
                            <div className='h-3 md:h-[15px] lg:h-4 w-[90%] bg-border rounded-sm mb-1 md:mb-1.5'></div>
                            <div className='h-3 md:h-[15px] lg:h-4 w-[50%] md:w-[60%] bg-border rounded-sm mb-2 md:mb-3'></div>

                            <div className='h-3 md:h-[15px] w-[90%] bg-border rounded-sm mb-1'></div>
                            <div className='h-3 md:h-[15px] w-[90%] bg-border rounded-sm mb-1'></div>
                            <div className='h-3 md:h-[15px] w-[75%] bg-border rounded-sm mb-5 md:mb-7 lg:mb-8'></div>

                            <div className='h-4 md:h-5 w-[25%] min-[480px]:w-[35%] lg:w-[25%] bg-border rounded-sm'></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingProducts);