import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex-center fixed top-0 z-50 w-full border-b-2
    border-black-200 bg-black-100 py-7 text-white'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <Link href='/'>
                    <Image
                        src="/jsm-logo.svg"
                        alt='logo'
                        width={55}
                        height={40} />
                </Link>
                <Image
                    src="/hamburger-menu.svg"
                    alt='humburger menu'
                    width={30}
                    height={30}
                    className='clock md:hidden'
                />

                <ul className='flex-center gap-x-3 max-md:hidden md:gap-s-10'>
                    <li className='body-text text-gradient_blue-purple !font-bold'>
                        <Link href='www.google.com'
                            target='_blank'>

                            Next.js 13.4 Course

                        </Link>
                    </li>
                    <li className='body-text  !font-bold'>
                        <Link href='www.google.com'
                            target='_blank'>

                            Master Class

                        </Link>
                    </li>


                </ul>

            </div>

        </nav>
    )
}

export default Navbar