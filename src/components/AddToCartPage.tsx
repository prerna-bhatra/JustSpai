// src/components/AddToCartPage.tsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import package_img from "../images/package.png";

interface SubService {
    name: string;
    price: number;
}

interface Service {
    name: string;
    price: number;
    image: string;
    subServices?: SubService[];
}

interface Package {
    name: string;
    price: number;
    description?: string;
    image: string;
}

interface Cart {

}

const AddToCartPage: React.FC = () => {
    const token = useSelector((state: any) => state.auth.token);
    const location = useLocation();

    const [packages, setPackages] = useState<Package[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [heading, setHeading] = useState("");

    const [cart, setCart] = useState([])

    useEffect(() => {
        const packageArr: Package[] = [];
        const serviceArr: Service[] = [];

        if (location?.state?.category === "women_salon") {
            setHeading("Salon For Women")
            packageArr.push(
                {
                    name: "Complete Waxing",
                    price: 999,
                    description: "Full body waxing including arms, legs, and underarms",
                    image: "https://i.pinimg.com/originals/3d/3e/c1/3d3ec1a7e0220df2f59470289e2b8bc1.jpg",
                },
                {
                    name: "Glow Facial Combo",
                    price: 1299,
                    description: "Facial + Cleanup + Massage for glowing skin",
                    image: "https://i.pinimg.com/originals/45/bf/50/45bf5057193c212e0fc7a1cc59c6f126.jpg",
                }
            );

            serviceArr.push(
                {
                    name: "Waxing",
                    price: 999,
                    image: "https://skinkraft.com/cdn/shop/articles/Applying-wax-to-a-young-woman_s-leg-for-hair-removal_1024x400.jpg?v=1658830857",
                    subServices: [
                        { name: "Full Body Wax", price: 900 },
                        { name: "Arm Wax", price: 300 },
                        { name: "Leg Wax", price: 350 },
                        { name: "Underarm Wax", price: 150 },
                    ],
                },
                {
                    name: "Facial",
                    price: 1200,
                    image: "https://static.wixstatic.com/media/ba8196_f1212d3870cc4a4ca22ffe563cc464c8~mv2.jpeg/v1/fill/w_560,h_318,al_c,lg_1,q_80,enc_avif,quality_auto/Image-empty-state.jpeg",
                    subServices: [
                        { name: "Gold Facial", price: 1200 },
                        { name: "Pearl Facial", price: 1000 },
                        { name: "Fruit Facial", price: 850 },
                    ],
                },
                {
                    name: "Manicure",
                    price: 800,
                    image: "https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg",
                    subServices: [
                        { name: "Basic Pedicure", price: 400 },
                        { name: "Luxury Manicure", price: 600 },
                        { name: "Gel Manicure", price: 700 },
                    ],
                }
                ,
                {
                    name: "Pedicure",
                    price: 800,
                    image: "https://silverinesalon.in/cdn/shop/files/perafin.jpg?v=1682767188",
                    subServices: [
                        { name: "Basic Pedicure", price: 400 },
                        { name: "Luxury Manicure", price: 600 },
                        { name: "Gel Manicure", price: 700 },
                    ],
                },
                {
                    name: "Hair care",
                    price: 800,
                    image: "https://cdn.shopify.com/s/files/1/0520/4983/8237/files/monthly_hair_care_maintenance.webp?v=1706626977",
                    subServices: [
                        { name: "Basic Pedicure", price: 400 },
                        { name: "Luxury Manicure", price: 600 },
                        { name: "Gel Manicure", price: 700 },
                    ],
                },
                {
                    name: "Hair care",
                    price: 800,
                    image: "https://sewamitra.up.gov.in/Upload/Service/359a9c6e-21d2-4276-aa54-bf93bb6cbe6d_.jpg",
                    subServices: [
                        { name: "Basic Pedicure", price: 400 },
                        { name: "Luxury Manicure", price: 600 },
                        { name: "Gel Manicure", price: 700 },
                    ],
                },
                {
                    name: "Threading & face waxing",
                    price: 800,
                    image: "https://images.squarespace-cdn.com/content/v1/51a9430fe4b0e3038176b925/1586804582094-4BBG53MGLV04CJFQU8RK/How+to+avoid+breakouts+after+waxing+or+threading",
                    subServices: [
                        { name: "Basic Pedicure", price: 400 },
                        { name: "Luxury Manicure", price: 600 },
                        { name: "Gel Manicure", price: 700 },
                    ],
                }



            );
        } else if (location?.state?.category === "men_salon") {
            setHeading("Salon For Men")

            packageArr.push(
                {
                    name: "Men's Grooming Combo",
                    price: 1199,
                    description: "Haircut + Shave + Face Clean-up",
                    image: "https://media.istockphoto.com/id/1146290756/photo/hairdresser-cutting-hair-of-male-client.jpg?s=612x612&w=0&k=20&c=PV25ntkEvjXb01ZqFCG9mfvGs9aN6Qm5W8VMTalNdrA=",
                },
                {
                    name: "Beard & Hair Styling Pack",
                    price: 899,
                    description: "Trendy haircuts and professional beard grooming",
                    image: "https://images.unsplash.com/photo-1588776814546-cb86cf8b0a73?auto=format&fit=crop&w=800&q=80",
                }
            );

            serviceArr.push(
                {
                    name: "Haircut",
                    price: 400,
                    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
                    subServices: [
                        { name: "Basic Cut", price: 200 },
                        { name: "Layered Cut", price: 300 },
                    ],
                },
                {
                    name: "Beard Styling",
                    price: 350,
                    image: "https://images.unsplash.com/photo-1588776831524-27d6c3cfb021?auto=format&fit=crop&w=800&q=80",
                    subServices: [
                        { name: "Beard Trim", price: 200 },
                        { name: "Beard Shape", price: 300 },
                    ],
                },
                {
                    name: "Face Cleanup",
                    price: 500,
                    image: "https://www.beautyglimpse.com/wp-content/uploads/2014/09/Facial-vs-Face-Clean-Up.jpg",
                    subServices: [
                        { name: "Regular Clean-up", price: 500 },
                        { name: "Charcoal Clean-up", price: 650 },
                    ],
                }
            );
        }

        setPackages(packageArr);
        setServices(serviceArr);
    }, [location]);

    return (
        <div className="mx-4 md:mx-60 my-10 flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="md:w-1/4">
                <p className="text-2xl md:text-4xl font-semibold">{heading}</p>
                <div className="border border-gray-400 mt-4 p-4">
                    <p className="text-left">Select a service</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <img src={package_img} alt="package" className="h-20 mx-auto" />
                            <p>Package</p>
                        </div>

                        {services.map((serviceItem, index) => (
                            <div key={index} className="text-center">
                                <img src={serviceItem.image} alt="" className="h-20 w-20 mx-auto" />
                                <p>{serviceItem.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-3/4 flex gap-4 ">

                <div className="border border-gray-400 p-4 md:w-3/4">
                    {
                        packages?.length > 0 ? (
                            <>
                                <p className="text-4xl font-semibold text-left">Packages</p>
                                {
                                    packages.map((packageItem) => (
                                        <div className="flex gap-4 border-b border-gray-400 p-2">
                                            <div className="w-3/4 text-left">
                                                <p className="text-left text-lg font-semibold">{packageItem.name}</p>
                                                <p className="text-sm font-semibold">Starts At ₹ {packageItem.price}</p>
                                                <ul className="list-disc ml-4">
                                                    {
                                                        packageItem.description?.split("+")?.map((descItem) => (
                                                            <li className="">
                                                                {descItem}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div
                                                className="w-1/4"
                                            >
                                                <button className="border border-blue-500 text-blue-500 hover:bg-blue-100 font-semibold px-4 py-2 rounded">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                {/* cart */}
                <div className="border border-gray-400 p-4 md:w-1/2">
                    {
                        cart.length > 0 ? (
                            <>
                                <p className="text-2xl font-semibold"> Cart</p>

                            </>
                        ) : (

                            <>
                                <img src="https://thumbs.dreamstime.com/b/realistic-empty-supermarket-shopping-cart-vector-illustration-isolated-white-background-realistic-empty-supermarket-shopping-118192710.jpg"  alt="cart"/>
                                <p>Your cart in empty</p>
                            </>
                        )
                    }

                </div>
            </div>
        </div>

    );
};

export default AddToCartPage;
