import React from 'react'
import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
// import Stats from '../components/section/Stats'



const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      {/* <Stats /> */}
      <WhatWeDo />
      {/* <Hero /> */}
      <Footer />
    </div>
  )
}

export default Home