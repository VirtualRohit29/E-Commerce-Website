import React from 'react';
import { Link } from 'react-router-dom';





function Login() {
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        {/*email*/}
      <span>Email</span>
      <br />
      <input type="email" placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
    {/*password */}
     <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="text" placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' />
    </div>
     {/*Login button */}
     <div className='flex justify-between mt-4 '>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-700'>login</button>
      <p>Not Registered 

        <Link to="/Signup"
        className='underline text-blue-600 cursor-pointer'>Signup</Link>
        {" "}</p>
     </div>
  </div>
</dialog>
    </div>
  )
}

export default Login;