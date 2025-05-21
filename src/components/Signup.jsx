import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  useEffect(() => {
    // Automatically open signup modal on component mount
    document.getElementById('signup_modal').showModal();
  }, []);

  const handleOpenLoginModal = () => {
    document.getElementById('signup_modal').close(); // Close signup modal
    document.getElementById('login_modal').showModal(); // Open login modal
  };

  return (
    <>
      {/* Signup Modal */}
      <dialog id="signup_modal" className="modal">
        <div className="modal-box w-[600px] max-w-full">
          <form method="dialog">
            <Link  to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>

          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-4">
            <div className="space-y-1">
              <span>Name</span>
              <input type="text" placeholder="Enter your full name" className="w-full px-3 py-2 border rounded-md outline-none" />
            </div>

            <div className="space-y-1">
              <span>Email</span>
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md outline-none" />
            </div>

            <div className="space-y-1">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md outline-none" />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300">
                Signup
              </button>

              <p>
                Have an account?{' '}
                <button
                  className="underline text-blue-600 cursor-pointer"
                  onClick={handleOpenLoginModal}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </dialog>

      {/* Login Modal */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box w-[600px] max-w-full">
          <form method="dialog">
            <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>

          <h3 className="font-bold text-lg">Login</h3>

          <div className="mt-4 space-y-4">
            <div className="space-y-1">
              <span>Email</span>
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md outline-none" />
            </div>

            <div className="space-y-1">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md outline-none" />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-300">
                Login
              </button>

              <p>
                Don’t have an account?{' '}
                <button
                  className="underline text-pink-600 cursor-pointer"
                  onClick={() => {
                    document.getElementById('login_modal').close();
                    document.getElementById('signup_modal').showModal();
                  }}
                >
                  Signup
                </button>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Signup;
