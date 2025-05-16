
// src/components/Navbar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import women_salone_logo from "../images/women_salon.png"
import men_salone_logo from "../images/men_salon.png"
import ac_logo from "../images/ac.png"
import cleaning_logo from "../images/cleaning_logo.png"
import drill_machine_logo from "../images/drill_machine_logo.png"
import water_purifier from "../images/water_purifier.png"
import ac_repairing from "../images/ac_repair.jpeg"
import women_wax from "../images/lazer.png"
import men_massage from "../images/men_massage.jpeg"
import kitchen_cleaning from "../images/kitchen.jpeg"

const Categories: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  const navigate = useNavigate();



  const goToAddToCart = (category: string) => {
    navigate("/add_to_cart", { state: { category } })
  }


  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-4">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-left">
          Doorstep solutions for everyday
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-left">
          problems
        </p>

        <div className="my-10 border border-gray-300 p-4 text-left">
          <p className="text-lg md:text-xl mb-6">What are you looking for?</p>

          {/* Categories Row 1 */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2"
                onClick={() => {
                  goToAddToCart("women_salon")
                }}
              >
                <img
                  src={women_salone_logo}
                  alt="women salon"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">Women Salon & Spa</p>
            </div>

            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2" onClick={() => {
                goToAddToCart("men_salon")
              }}>
                <img
                  src={men_salone_logo}
                  alt="men salon"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">Men Salon & Massage</p>
            </div>

            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2">
                <img
                  src={ac_logo}
                  alt="ac repair"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">Ac & Appliances Repair</p>
            </div>
          </div>

          {/* Categories Row 2 */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-10">
            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2">
                <img
                  src={cleaning_logo}
                  alt="cleaning"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">Cleaning</p>
            </div>

            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2">
                <img
                  src={drill_machine_logo}
                  alt="drill"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">
                Electrician, Plumber & Carpenter
              </p>
            </div>

            <div className="cursor-pointer flex-1">
              <div className="bg-gray-200 px-4 py-2">
                <img
                  src={water_purifier}
                  alt="water"
                  className="h-20 w-full object-contain"
                />
              </div>
              <p className="text-center text-sm mt-2">Water purifier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex flex-wrap gap-4">
          <img src={ac_repairing} alt="" className="h-40 md:h-60 w-[48%] object-cover rounded" />
          <img src={women_wax} alt="" className="h-40 md:h-60 w-[48%] object-cover rounded" />
          <img src={men_massage} alt="" className="h-40 md:h-60 w-[48%] object-cover rounded" />
          <img src={kitchen_cleaning} alt="" className="h-40 md:h-60 w-[48%] object-cover rounded" />
        </div>
      </div>

    </div>

  );
};

export default Categories;