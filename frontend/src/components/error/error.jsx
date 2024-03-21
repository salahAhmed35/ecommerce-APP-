import React from 'react';

const Error = ({errorMessage}) =>{
    return (
        <div className='p-2 mx-2 bg-red-300 rounded'>
            <p className='font-semibold text-center text-red-600'>{errorMessage}</p>
        </div>
    );
};
export default Error;
