import React from 'react'
// import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
import Stats from '../components/section/Stats'
// import { PagesHeader } from './../components/section/PagesHeader';
import CTA from '../components/section/CTA'
import Subcribe from '../components/section/Subcribe';
import BlogIntro from '../components/section/BlogIntro'
// import Projects from '../components/section/Projects';




const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro title="About Us" subTitle="We Can Save More Lifes With Your Helping Hand." content="  The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to the society and helping the less privileged and vulnerable in our communities to alleviate human sufferings and create opportunities for a better life" />
      <WhatWeDo />
      <CTA />
      <Stats />
      <BlogIntro />
      <Subcribe />
      {/* 
      <Projects /> */}

      {/* <PagesHeader /> */}
      {/* <Hero /> */}






    </div>
  )
}

export default Home