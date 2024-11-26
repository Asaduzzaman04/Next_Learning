import React from 'react';
import Button from '../components/Button';

const csrssrComponents = () => {
    return (
        <div className='h-lvh w-full flex-col gap-10 capitalize flex justify-center items-center text-3xl'>
            <p>hello i am server side components</p>
            <div>
                <Button/>
            </div>
        </div>
    );
};

export default csrssrComponents;