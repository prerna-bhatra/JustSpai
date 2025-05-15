import React, { useState } from 'react';
import Categories from './Categories';

const Home: React.FC = () => {

    return (
        <div className='container mx-auto my-10'>
                {/* categories */}
               <Categories/>

        </div>
    )
}

export default Home