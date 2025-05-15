
// src/components/Navbar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MostBookedServices: React.FC = () => {
    const token = useSelector((state: any) => state.auth.token);

    return (
        <div className="flex justify-content-between  gap-4 ">


        </div>
    );
};

export default MostBookedServices;