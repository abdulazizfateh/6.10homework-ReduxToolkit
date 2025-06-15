import axios from 'axios'
import React, { useEffect } from 'react'

const CategoryList = () => {
    useEffect(() => {
        axios.get
    }, [])
    return (
        <section className='section_category_list pt-5 md:pt-7 lg:pt-8'>
            <div className="container mx-auto">
                <div className='category_list_wrapper'>
                    <ul className='flex items-center gap-2'>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                        <li>12wewc swed</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CategoryList