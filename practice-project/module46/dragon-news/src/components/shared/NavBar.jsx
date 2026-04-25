import React from 'react';
import Link from 'next/link';
import userAvater from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-6'>
            <div></div>

            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={userAvater} alt='user' height="60" weight="60"></Image>
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default NavBar;