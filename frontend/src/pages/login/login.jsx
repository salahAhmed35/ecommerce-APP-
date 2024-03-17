import React from 'react';


const Login = () => {
    return (
        <>
          <div className="login bg-white-blue h-100vh flex items-center justify-center">
            <div className="login-form bg-white w-400 p-3 rounded h-">
                <h2 className='text-blue font-semibold text-3xl my-3 text-center'>Login</h2>
                <form action="Submit">
                    <div className="email my-3  ">
                        <label htmlFor="email" className='mx-2 text-lg font-semibold text-dark-gray'>Email</label>
                        <input type="email" id='email' name='email'placeholder='Enter Email' className='px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded'/>
                    </div>
                    <div className="password">
                        <label htmlFor="password" className='mx-2 text-lg font-semibold text-dark-gray'>Password</label>
                        <input type="password" id='password' placeholder='Enter Password' name='email'className='px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded'/>
                    </div>
                    <div className="show-password my-1 mx-2">
                        <input type="checkbox" />
                        <span className='text-gray ml-1'>show password</span>
                    </div>
                    <button className='border-none  bg-blue text-white font-semibold text-xl rounded w-full py-2 my-3 mx-auto'>Login</button>
                    <div className='my-3'>
                        <span>Don't have an account ? <a href="" className='text-blue'>Sign up</a></span>
                    </div>
                </form>
            </div>
          </div>
        </>
    )
}
export default Login