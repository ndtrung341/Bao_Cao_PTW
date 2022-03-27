import React from 'react';
import NewProducts from './NewProducts';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
   return (
      <>
         <Slider />
         <Services />
         <NewProducts />
      </>
   );
};

export default Home;
