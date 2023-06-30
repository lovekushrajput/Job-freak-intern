import React from 'react'

function Guide() {
    return (
        <div className='mx-3'>
            <h2 className='text-center text-3xl mt-4 uppercase font-semibold'>Guide</h2>

            <iframe
                title='Guides'
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3598.069818288991!2d79.57451731501766!3d25.60259613370923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.6055332!2d79.57777899999999!4m5!1s0x399d43139af305b1%3A0xe3bef481db2c2bff!2sus%20address!3m2!1d25.5996591!2d79.5769126!5e0!3m2!1sen!2sin!4v1688142586623!5m2!1sen!2sin"
                width="900" height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className='ml-12 mt-14'
            ></iframe>

        </div>
    )
}

export default Guide