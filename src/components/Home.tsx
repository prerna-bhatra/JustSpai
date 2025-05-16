import React, { useState } from 'react';
import Categories from './Categories';


import facial_cleaning from '../images/facialcleaning.jpeg';
import menicure from '../images/menicure.jpg';
import pedicure from '../images/pedicure.jpg';
import hair_care from '../images/haircare.jpg';
import waxing from '../images/waxing.png';
import bleach from '../images/bleach.jpg';
import hair_cut_beared from "../images/hair_cut_beared.jpg";
import hair_spa_men from "../images/hair_spa_men.jpg";
import men_menicure from "../images/men_menicure_pedicure.jpg";


const Home: React.FC = () => {

    return (
        <div className='container mx-auto my-10'>
            {/* categories */}
            <Categories />

            {/* Women Salon categories */}

            <p className='text-left text-4xl font-semibold mb-4 mt-10'>Salon for women</p>
            <div className='flex justify-between gap-2 mb-20'>

                <div className='cursor-pointer'>
                    <img src={bleach} alt="" className='h-40' />
                    <p className='mt-4'>Bleach & Detan</p>
                </div>

                <div className='cursor-pointer'>
                    <img src={menicure} alt="" className='h-40' />
                    <p className='mt-4'>Menicure</p>
                </div>

                <div className='cursor-pointer'>
                    <img src={pedicure} alt="" className='h-40' />
                    <p className='mt-4'>Pedicure</p>
                </div>
                <div className='cursor-pointer'>
                    <img src={waxing} alt="" className='h-40' />
                    <p className='mt-4'>Waxing</p>
                </div>

                <div className='cursor-pointer'>
                    <img src={hair_care} alt="" className='h-40' />
                    <p className='mt-4'>Hair & Care</p>
                </div>

                <div className='cursor-pointer'>
                    <img src={facial_cleaning} alt="" className='h-40' />
                    <p className='mt-4'>Facial & Cleaning</p>
                </div>
            </div>




            {/* men salon */}
            <p className='text-left text-4xl font-semibold mb-4'>Salon for men</p>
            <div className='flex justify-content gap-4'>

                <div>
                    <img src={hair_cut_beared} alt="" className='h-40' />
                    <p className='mt-4'>Hair cut & beared</p>
                </div>

                <div>
                    <img src={hair_spa_men} alt="" className='h-40' />
                    <p className='mt-4'>Hair Color and Spa</p>
                </div>

                <div>
                    <img src={men_menicure} alt="" className='h-40' />
                    <p className='mt-4'>Pedicure and Menicure</p>
                </div>

            </div>





            {/* men salon */}




        </div>
    )
}

export default Home