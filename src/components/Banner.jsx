import React from 'react'

const Banner = () => {
    return (
        <div className='mx-[10%] my-14'>
            <div className='grid gap-5'>
                <div className=' grid grid-cols-3  gap-5 '>
                    <div className='relative col-span-2 h-80' >
                        <img className='w-full h-full object-cover' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/2023/04/Post-8.jpg" alt="" />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <h5 className='font-bold text-2xl ' >Setting Goals and staying motivated</h5>
                            <p className='italic'>By Hellen - August 12, 2026</p>
                        </div>
                    </div>
                    <div className='relative col-span-1 h-80'>
                        <img className='w-full h-full object-cover' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/2023/04/Post-3.jpg" alt="" />
                         <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <p className='font-bold text-2xl ' >Reflecting on the blessings in my life</p>
                            <p className='italic'>By Hellen - August 12, 2026</p>
                        </div>
                    </div>
                </div>
                <div className=' grid grid-cols-3 gap-5'>
                    <div className='relative h-80'>
                        <img className='w-full h-full object-cover' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/elementor/thumbs/Post-14-q53hgz1evdsog96cpv39l4xnmnhcptccrkepucey6g.jpg" alt="" />
                        <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <p className='font-bold text-2xl ' >Reflecting on the blessings in my life</p>
                            <p className='italic'>By Hellen - August 12, 2026</p>
                        </div>
                    </div>
                    <div className='relative h-80'>
                        <img className='w-full h-full object-cover' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/elementor/thumbs/Post-10-q53hgx5qhpq3t1930ua0g5eqfvqmaf4w3b3qvshqiw.jpg" alt="" />
                        <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <p className='font-bold text-2xl ' >Reflecting on the blessings in my life</p>
                            <p className='italic'>By Hellen - August 12, 2026</p>
                        </div>
                    </div>
                    <div className='relative h-80 '>
                        <img className='w-full h-full object-cover' src="https://demosites.royal-elementor-addons.com/personal-blog-v3/wp-content/uploads/sites/71/elementor/thumbs/Post-13-q53hgz1evdsog96cpv39l4xnmnhcptccrkepucey6g.jpg" alt="" />
                        <div className='absolute bottom-5 right-5 left-3 text-white'>
                            <p className='font-bold text-2xl ' >Reflecting on the blessings in my life</p>
                            <p className='italic'>By Hellen - August 12, 2026</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner