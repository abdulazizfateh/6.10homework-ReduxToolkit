import React from 'react'

const Home = () => {

    return (
        <section className='section_home'>
            <div className="container mx-auto w-full h-[92dvh] flex items-center justify-center">
                <h1 className='text-2xl'>Welcome</h1>
            </div>
        </section>
    )
}

export default React.memo(Home);