// src/components/Navbar.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import home_logo from "../images/JustSpai_logo.jpg"
import Login from "./Login";
import SignupForm from "./SignUp";

const Navbar: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupnModal, setShowSignupModal] = useState(false);



  return (
    <>
      <nav className="bg-[#5d17ea] ">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">
            <img className="h-24" src={home_logo} alt="logo" />
          </Link>
          <div className="space-x-4">
            {token ? (
              <button className="text-white">
                Logout
              </button>
            ) : (
              <div className="flex gap-4">
                <div className="text-white cursor-pointer"
                  onClick={() => setShowLoginModal(true)}

                >
                  Login
                </div>
                <div className="text-white cursor-pointer"
                  onClick={() => setShowSignupModal(true)}>
                  Signup
                </div>


              </div>
            )}
          </div>
        </div>
      </nav>

      {
        showLoginModal ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 relative w-[90%] max-w-md shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                onClick={() => setShowLoginModal(false)}
              >
                &times;
              </button>
              <Login />
            </div>
          </div>
        ) : null
      }



      {
        showSignupnModal ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 relative w-[90%] max-w-md shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                onClick={() => setShowSignupModal(false)}
              >
                &times;
              </button>
              <SignupForm />
            </div>
          </div>
        ) : null
      }
    </>
  );
};

export default Navbar;