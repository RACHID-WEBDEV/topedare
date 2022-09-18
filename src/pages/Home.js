import React from 'react'
import AboutIntro from '../components/section/AboutIntro'
import Hero from '../components/section/Hero'
import HeroIntro from '../components/section/HeroIntro'


const Home = () => {
  return (
    <div className="">
      <HeroIntro />
      <AboutIntro />
      <Hero />
      <h1 className="text-2xl">Home</h1>
      <p className="text-red-500 font-Fredoka font-normal text-lg">This is a Sub Title</p>
      <p className="text-red-500 mt-5 text-lg">This is a Sub Title</p>
      <p className="text-green-500 font-Fredoka font-medium text-lg">This is a Sub Title</p>
      <p className="text-gray-300 font-Fredoka font-semibold text-lg">This is a Sub Title</p>




    </div>
  )
}

export default Home