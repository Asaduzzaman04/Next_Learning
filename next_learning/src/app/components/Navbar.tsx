
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    return (
        <>
        <div className=' font-bold text-xl flex justify-center items-center gap-10'>
            <p className='text-4xl '>

            i am navbar
            </p>
            <div className='border-2 border-black flex justify-center items-center gap-10'>

            <Link href="/"> home </Link>
            <Link href="/about"> about </Link>
            <Link href="/contact"> contact</Link>
            <Link href="/blogs">blogs</Link>
            </div>
        </div>
         </>
    );
};

export default Navbar;


/*
* Navigation allows users to interact with your app and move between the defined routes.
* syntex :    <Link href="/"> home </Link>
*/
