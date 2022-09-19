import React from 'react'
import Footer from '../components/global/Footer'
import AboutIntro from '../components/section/AboutIntro'
// import Hero from '../components/section/Hero'
import HeroIntro from '../components/section/HeroIntro'


const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      {/* <Hero /> */}
      <Footer />
    </div>
  )
}

export default Home