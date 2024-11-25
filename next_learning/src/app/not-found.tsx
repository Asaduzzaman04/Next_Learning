import React from 'react';

const NotFound = () => {
    return (
        <div className='h-lvh flex justify-center items-center bg-yellow-900 w-full '>
            <p className='font-bold text-4xl'> page not found</p>
        </div>
    );
};

export default NotFound;

//?not-found.tsx: Handles 404 errors for pages that don’t exist.