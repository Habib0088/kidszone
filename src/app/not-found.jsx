import Logo from '@/components/Logo';
import React from 'react';
import { MdOutlineNearbyError } from 'react-icons/md';

const NotFound = () => {
    return (
       <div className='flex flex-col min-h-screen items-center justify-center space-y-5'>
            <h1 className='text-4xl font-bold animate-pulse'>Page Not Found...</h1>
            <MdOutlineNearbyError className='text-primary animate-ping' size={200} />
        </div>
    );
};

export default NotFound;