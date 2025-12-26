import React from 'react';
import Logo from '../components/Logo';

const loading = () => {
    return (
        <div className='flex flex-col min-h-screen items-center justify-center space-y-5 '>
            <h1 className='text-4xl font-bold '>Loading...</h1>
            <div className="animate-ping">

            <Logo className=" text-4xl"></Logo>
            </div>
        </div>
    );
};

export default loading;