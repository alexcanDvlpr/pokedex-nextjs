import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav className="z-50 w-full h-10 bg-black bg-opacity-30 flex justify-center items-center py-2 fixed top-0 left-0">
            <div className="">
            Hecho por
            <Link href="https://github.com/alexcanDvlpr" passHref>
                <a target="_blank" className="hover:underline font-bold">
                    &nbsp;Alexcan.Dvlpr&nbsp;
                </a>
            </Link>
            con ❤️
            </div>
        </nav>
    )
}

export default Navbar