import React from 'react';
import Title from '../componant/Title';
import AboutUs from '../componant/AboutUs';
import Product from '../componant/Product';
import Partner from '../componant/Partner';
import Wolftalk from '../componant/Wolftalk';
import Clients from '../componant/Clients';
import ContactUs from '../componant/ContactUs';
import Footer from '../componant/Footer';

function Home() {
  return (
    <div>
      <Title/>
      <AboutUs/>  
      <Product/>
      <Partner/>
      <Wolftalk/>
      <Clients/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default Home;