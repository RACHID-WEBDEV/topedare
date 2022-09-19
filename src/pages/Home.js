import React from 'react'
import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
// import Stats from '../components/section/Stats'
// import { PagesHeader } from './../components/section/PagesHeader';



const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      {/* <Stats /> */}
      <WhatWeDo />



      {/* <PagesHeader /> */}
      {/* <Hero /> */}





      <Footer />
    </div>
  )
}

export default Home