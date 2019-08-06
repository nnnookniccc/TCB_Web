import React from 'react';
import TitleAboutUs from '../componant/TitleAboutUs';
import AboutWolf from '../componant/AboutWolf'
import WolfMission from '../componant/WolfMission'
import WolfHistory from '../componant/WolfHistory'
import Footer from '../componant/Footer'


function AboutUsPage() {
  return (
    <div>
      <TitleAboutUs/>
      <AboutWolf/>
      <WolfMission/>
      <WolfHistory/>
      <Footer/>
    </div>
  );
}

export default AboutUsPage;