import React from 'react'
import { Link } from "react-router-dom";
import Banner1 from '../../assets/hero/hero-banner-1.jpg'
import Banner2 from '../../assets/hero/hero-banner-2.jpg'
import Banner3 from '../../assets/hero/hero-banner-3.jpg'


import HeroShape2 from '../../assets/hero/hero-shape-2.png'
import Button from '../form/Button';

function HeroIntro() {
    return (
        <>
            <section className="relative py-24 object-cover object-[83%]  bg-cover bg-center bg-hero-bg">

                <div className="lg:px-12">
                    <div className="lg:flex lg:gap-10 lg:justify-between">
                        <div className="py-20 lg:w-[45%] ">
                            <h1 className="text-gray-900 mb-6 text-7xl ">
                                Be a Voice for Poor People
                            </h1>
                            <p className="font-semibold text-gray-600 mb-8 text-xl leading-normal">
                                We are here to support you every step of the way
                            </p>
                            <Link to="/contact">
                                <Button className="">Discover More</Button>
                            </Link>
                            {/* <p className="dark:text-jacarta-300 mb-10">
                                Every digital creation available through MakersPlace is an authentic and truly unique digital creation,
                                signed and issued by the creator — made possible by blockchain technology. Even if the digital creation
                                is copied, it won't be the authentic and originally signed version.
                            </p> */}
                            {/* <div className="flex space-x-4 sm:space-x-10">
                                <div className="flex space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent h-8 w-8 shrink-0">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="font-display text-jacarta-700 block text-xl dark:text-white">11,2k+</span>
                                        <span className="dark:text-jacarta-300 text-jacarta-700">Products launched</span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent h-8 w-8 shrink-0">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="font-display text-jacarta-700 block text-xl dark:text-white">99,7%</span>
                                        <span className="dark:text-jacarta-300 text-jacarta-700">Satisfaction Rate</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="lg:w-[55%]">
                            <div className="relative">
                                <div className=" flex justify-center gap-6">
                                    <div className="img-holder one z-20 " style={{ width: 270, height: 300 }}>
                                        <img src={Banner1} width={270} height={300} alt="hero banner" className="img-holder one " />
                                    </div>
                                    <div className="img-holder two mt-28 z-20" style={{ width: 240, height: 370 }}>
                                        <img src={Banner2} width={240} height={370} alt="hero banner" className="img-holder two " />
                                    </div>
                                </div>
                                <div className=" img-holder three z-20 absolute bottom-[-40px] left-[56px] " style={{ width: 280, height: 200 }}>
                                    <img src={Banner3} width={280} height={150} alt="hero banner" className="img-holder three " />
                                </div>
                                {/* <img src={HeroShape1} width={380} height={190} alt="" className="hero-shape-1 z-20" /> */}
                                <img src={HeroShape2} width={622} height={551} alt="" className="absolute right-0 top-[-90px]" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>





            {/* <section className="section hero  object-cover object-[83%]  bg-cover bg-center bg-hero-bg" id="home" aria-label="home" >
                <div className="container flex items-center gap-20">
                    <div className=" w-2/6"></div>
                    <div className=""></div>
                    <div className="hero-content">
                        <h1 className="h1 section-title">
                            The Best Program to <span className="span">Enroll</span> for Exchange
                        </h1>
                        <p className="hero-text">
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                        </p>
                        <Link to="" className="btn has-before">
                            <span className="span">Find courses</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                        </Link>

                    </div>
                    <figure className="hero-banner">
                        <div className="img-holder one" style={{ width: 270, height: 300 }}>
                            <img src={Banner1} width={270} height={300} alt="hero banner" className="img-cover" />
                        </div>
                        <div className="img-holder two" style={{ width: 240, height: 370 }}>
                            <img src={Banner2} width={240} height={370} alt="hero banner" className="img-cover" />
                        </div>
                        <img src={HeroShape1} width={380} height={190} alt="" className="shape hero-shape-1" />
                        <img src={HeroShape2} width={622} height={551} alt="" className="shape hero-shape-2" />
                    </figure>
                </div>
            </section> */}
        </>
    )
}

export default HeroIntro