import React from 'react'
import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
import Stats from '../components/section/Stats'
// import { PagesHeader } from './../components/section/PagesHeader';
import CTA from '../components/section/CTA'
import Subcribe from '../components/section/Subcribe';



const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      <WhatWeDo />
      <CTA />
      <Stats />
      <Subcribe />


      {/* <PagesHeader /> */}
      {/* <Hero /> */}





      <Footer />
    </div>
  )
}

export default Home