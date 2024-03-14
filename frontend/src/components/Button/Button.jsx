import React from 'react';


const Button = ({text}) => {
    return (
        <>
          <button className='border-none bg-blue text-white rounded '>
            {text}
          </button>
        </>
    )
}
export default Button