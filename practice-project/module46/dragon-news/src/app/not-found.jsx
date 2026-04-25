import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-purple-500'>Not Found</h2>
            <Link href="/">
                <button className='btn'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;