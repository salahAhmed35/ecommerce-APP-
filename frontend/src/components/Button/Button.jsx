import React from 'react';


const Button = ({text}) => {
    return (
        <>
          <button className='border-none bg-blue text-white rounded mt-3 px-2 py-2 w-180 font-semibold'>
            {text}
          </button>
        </>
    )
}
export default Button