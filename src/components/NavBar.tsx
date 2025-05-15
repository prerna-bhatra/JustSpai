// src/components/Navbar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import home_logo from "../images/JustSpai_logo.jpg"

const Navbar: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  return (
    <nav className="bg-[#5d17ea] ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          <img  className="h-24" src={home_logo} alt="logo"/>
        </Link>
        <div className="space-x-4">
          {token ? (
            <button className="text-white">
              Logout
              </button>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;