import React from 'react';

const SuccessMessage = ({message}) => {
    return (
    <div className='p-2 mx-2 my-2 bg-green-300 rounded'>
        <p className='font-semibold text-center text-green-800'>{message}</p>
    </div>
  );
}
export default SuccessMessage