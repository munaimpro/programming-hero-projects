import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <Image src={logo} width="300" height="200" alt="logo" className='mx-auto' />
            <h2>Header</h2>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE MMM d, yyyy")}</p>
        </div>
    );
};

export default Header;