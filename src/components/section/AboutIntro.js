import React from 'react'
import { Link } from "react-router-dom";
import AboutBanner from "../../assets/about/about-banner.jpg"
import ShowLove from "../../assets/about/love-shapes.svg"
import Button from '../form/Button';
import aboutShape from '../../assets/about/about-shape-3.png';
import Fade from 'react-reveal/Fade';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';



function AboutIntro() {
    return (
        <>
            <section className="relative pt-24 pb-10 lg:pt-32 lg:pb-2 text-gray-800">

                <div className="lg:p-12">
                    <div className="lg:flex lg:gap-10 lg:justify-between">
                        <div className="lg:w-[55%] px-2">
                            <div className="relative">
                                <div className=" flex justify-center gap-6">
                                    <Fade left>
                                        <div className="z-20" style={{ width: 520, height: 370 }}>
                                            <img src={AboutBanner} width={520} height={370} loading="lazy" alt="about banner" className="rounded-xl" />
                                        </div>
                                    </Fade>


                                </div>
                                <div className="w-[291px] h-[93px] absolute bottom-16 md:bottom-[-20px] lg:bottom-[-40px] z-30  bg-no-repeat bg-contain bg-about-shape1 about-shape-1-animate">
                                    <div className="flex items-center justify-center gap-3 pt-3.5 p-2">
                                        <span className="rounded-full p-4 bg-tdf-blue-50/20" >
                                            <img src={ShowLove} width={30} height={30} alt="" className="" />
                                        </span>
                                        <p className="text-xs font-black mr-8 text-gray-900 w-[155px]">We help more than 1.2k+ children every year</p>
                                    </div>
                                </div>

                                <img src={aboutShape} width="732" height="528" alt="" className="lg:min-w-[732px] absolute left-[-50px] top-[-80px]" />
                            </div>
                        </div>
                        <div className="mt-[-30px] md:mt-0 lg:pb-20 lg:mt-[-100px] xl:mt-[-50px] lg:w-[45%] px-3 ">
                            <div className="md:px-8 md:mt-12 lg:mt-0 lg:px-0">
                                <Fade top>
                                    <SectionTitle title="About Us" />
                                </Fade>
                                <Fade left>
                                    <SectionSubTitle subTitle="  We Can Save More Lifes With Your Helping Hand." />
                                </Fade>
                                <Fade bottom>
                                    <p className=" mb-10 text-gray-600">
                                        The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to the society and helping the less privileged and vulnerable in our communities to alleviate human sufferings and create opportunities for a better life
                                    </p>

                                </Fade>
                                <Fade right>
                                    <div className="flex space-x-4 mb-8 sm:space-x-10">
                                        <div className="flex space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-gray-600 h-8 w-8 shrink-0">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                            </svg>
                                            <div>
                                                <span className="font-black text-gray-600 block text-xl dark:text-white">82+</span>
                                                <span className="text-gray-500">Completed Project</span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-gray-600 h-8 w-8 shrink-0">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                            </svg>
                                            <div>
                                                <span className="font-black text-gray-600 block text-xl dark:text-white">90.7%</span>
                                                <span className="text-gray-500">Satisfaction Rate</span>
                                            </div>
                                        </div>
                                    </div>

                                </Fade>
                                <Fade bottom delay={1000}>
                                    <div className="text-center lg:text-left">
                                        <Link to="/about">
                                            <Button className="">Learn More</Button>
                                        </Link>
                                    </div>

                                </Fade>
                            </div>

                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutIntro