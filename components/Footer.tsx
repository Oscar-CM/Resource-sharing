import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='text-white-800 flex-between w-full 
        gap-y-10 px-20 max-md:flex-col'>
            <p> Copyright 2030 Oscar | All rights reserved</p>
            <div className='flex gap-x-9'>
                <Link href="/terms-of-use">
                    Terms of Use
                </Link>

                <Link href="/privacy">
                    Privacy Policy
                </Link>



            </div>
        </footer>
    )
}

export default Footer