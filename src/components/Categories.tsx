
// src/components/Navbar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import women_salone_logo from "../images/women_salon.png"
import men_salone_logo from "../images/men_salon.png"
import ac_logo from "../images/ac.png"
import cleaning_logo from "../images/cleaning_logo.jpeg"




const Categories: React.FC = () => {
    const token = useSelector((state: any) => state.auth.token);

    return (
        <div className="flex justify-content-between  ">

            <div>
                <p className="text-2xl font-semibold ">  Doorstep solutions for everyday problems. </p>

                <div className="my-20 border border-gray p-4 text-left ">
                    <p className="text-xl">What are you looking for?</p>

                    {/* categories name and images link */}


                    <div className="flex justify-between gap-4">
                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">
                                <img src={women_salone_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Women Salon & Spa</p>
                        </div>

                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">
                                <img src={men_salone_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Men Salon & Massage</p>
                        </div>

                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">

                                <img src={ac_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Ac & Appliances Repair</p>
                        </div>
                    </div>


                    {/* category 2 */}

                    <div className="flex justify-between gap-4 mt-10">
                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">
                                <img src={cleaning_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Cleaning</p>
                        </div>

                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">
                                <img src={men_salone_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Men Salon & Massage</p>
                        </div>

                        <div className="cursor-pointer">
                            <div className="bg-gray-200 px-4 py-2">

                                <img src={ac_logo} alt="women salon" className="h-20 w-40" />
                            </div>

                            <p>Ac & Appliances Repair</p>
                        </div>
                    </div>


                </div>


            </div>
            <div>

            </div>
        </div>
    );
};

export default Categories;