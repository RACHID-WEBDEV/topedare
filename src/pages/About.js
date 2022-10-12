import React, { useState, useEffect } from 'react'
// import AboutUs from './../components/section/AboutUs';
import SectionTitle from './../components/section/SectionTitle';
import { Fade, Bounce } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import AboutIntro from './../components/section/AboutIntro';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Health from '../assets/section/health-care.svg'
import Education from '../assets/section/charity-education.svg'
import Employment from '../assets/section/work.svg'
import { EmpowerIcon } from '../assets/svgsIcons';
import Button from '../components/form/Button';

import AboutImg1 from '../assets/about/about-landing-image.jpg'
import AboutImg2 from '../assets/about/about-landing-image2.jpg'
import PagesIntro from './../components/global/PagesIntro';
import Helmets from './Helmet';
// import useSWR from 'swr';
// import { kebabCase } from '../utils/utils';
import useSWR from 'swr';
import parse from 'html-react-parser';



const About = () => {
    const { data, error } = useSWR(`${process.env.REACT_APP_BASE_URL}public/content/components?user=${process.env.REACT_APP_USER_lOGIN_ID}`)

    const result = data?.data?.components?.map(({ description }) => {
        return description
    })

    // console.log('result out', result)

    if (error) return console.log(error)

    if (!result) {
        return <h1>Loading...</h1>
    }
    const aboutIntro = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-intro"
    })
    const aboutContent1 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-content1"
    })


    return (
        <>
            <Helmets title="About Us" />
            <PagesIntro className="text-tdf-bg" title="About Us" />
            <section className="object-cover object-[83%] pb-10  bg-cover bg-center bg-hero-bg overflow-hidden pt-5 ">
                <div className="hidden lg:block">
                    <Fade bottom>
                        <SectionSubTitle className="text-center" subTitle="We Love To Help The Poor" />
                    </Fade>

                </div>
                <div className="gap-16 items-center xl:px-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        {aboutIntro && <Fade top>
                            {parse(aboutIntro?.description)}
                        </Fade>}

                        {aboutContent1 &&
                            <Fade bottom>
                                {parse(aboutContent1?.description)}

                                {/* <div>
                                <p className=" text-gray-600 pb-1">
                                    The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to society and helping the less privileged and vulnerable in our communities to alleviate human sufferings and create opportunities for a better life.
                                </p>

                                <p className=" text-gray-600">The Tope Dare Foundation reaches out basically to children who are vulnerable and may have otherwise been left to roam the streets with no hopes, children who were perhaps destined to live in poverty or become miscreants in our society.</p>
                            </div> */}
                            </Fade>}


                    </div>
                    <Fade right>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full  rounded-lg" src={AboutImg1} alt="About Landing 1" />
                            <img className="mt-10 w-full lg:mt-16 rounded-lg" src={AboutImg2} alt="About Landing 2" />
                        </div>

                    </Fade>

                </div>
            </section>


            <AboutIntro aboutpage title="Helping Them Today" subTitle=" See what we do for the poor people and the children" content="Help is Our Goal. We Can Save More Lifes With Your Helping Hand. We believe they have a future bright with hope if we assist with the basic education, health care employment opportunity and empowerment." switchColumn />

            <div className=" lg:pt-28 lg:pb-4 object-cover object-[83%]  bg-cover bg-right bg-section-bg overflow-hidden">
                <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
                    <div>
                        <Fade top>
                            <SectionTitle title="Our initiative" />
                        </Fade>
                        <Fade left>
                            <div className="max-w-2xl">
                                <SectionSubTitle subTitle=" Changing the lives of these children and everyone around them." />
                                <p className=" text-gray-600 ">
                                    We organize outreaches and initiatives to help relieve human suffering in our country by providing access to necessities. Health, education, and economic empowerment are three of our focus areas.
                                </p>

                            </div>
                        </Fade>
                    </div>
                    <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                        <Fade top>
                            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                <div className="relative p-8 space-y-8">
                                    <img src={Health} className="w-10" alt="Health illustration" />

                                    <div className="space-y-2">
                                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-600">Health</h5>
                                        <p className="text-base text-gray-600">Helping those in need of basic medical health care get and stay healthy for life by teaching good habits, payment of hospital bills, and provision of drugs and equipment.</p>
                                    </div>
                                    <Link to="" className="lg:flex justify-between hidden items-center group-hover:text-gray-600">
                                        <span className="text-base">Read more</span>
                                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                <div className="relative p-8 space-y-8">
                                    <EmpowerIcon className="w-10 h-10" />

                                    <div className="space-y-2">
                                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-600">Empowerment</h5>
                                        <p className="text-base text-gray-600">Promoting empowerment of the unemployed in achieving poverty eradication, social integration, and full employment integration for our youth and women</p>
                                    </div>
                                    <Link to="" className="lg:flex hidden justify-between items-center group-hover:text-gray-600">
                                        <span className="text-base">Read more</span>
                                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade top>
                            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                <div className="relative p-8 space-y-8">
                                    <img src={Education} className="w-10" alt="education illustration" />

                                    <div className="space-y-2">
                                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-600">Education</h5>
                                        <p className="text-base text-gray-600">Keeping kids in school through tutoring, computer courses, and financial aid as education serves as a panacea for socio-economic</p>
                                    </div>

                                    <Link to="/about" className="hidden lg:flex justify-between items-center group-hover:text-gray-600">
                                        <span className="text-base">Read more</span>
                                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                                    <img src={Employment} className="w-10" alt="Employment illustration" />

                                    <div className="space-y-2">
                                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-600">Employment</h5>
                                        <p className="text-base text-gray-600">Providing an avenue to train unemployed youths with the necessary skills to get jobs and start a career or profession for financial freedom</p>
                                    </div>
                                    <Link to="" className="flex justify-between items-center group-hover:text-gray-600">
                                        <span className="text-base">Read more</span>
                                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-8 bg-tdf-bg ">
                <Fade top>
                    <SectionSubTitle className="text-center   " subTitle=" Help is Our Goal" />
                </Fade>
                <Fade left>
                    <p className=" text-gray-600 text-center mb-16">  We help people with our power to fight poverty and Malnutritions.</p>

                </Fade>


                <div className="grid grid-cols-2 md:grid-cols-4">
                    <Fade top>
                        <div className="mb-10 text-gray-600 text-center">
                            <span className="font-Fredoka text-gray-800 block text-3xl lg:text-5xl">870
                                +</span>
                            <p>Total Donations</p>
                        </div>
                        <div className="mb-10 text-gray-600 text-center">
                            <span className="font-Fredoka text-gray-800 block text-3xl lg:text-5xl">480+</span>
                            <p>Campaigns Closed</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="mb-10 text-gray-600 text-center">
                            <span className="font-Fredoka text-gray-800 block text-3xl lg:text-5xl">365+</span>
                            <p>Happy People</p>
                        </div>
                        <div className="mb-10 text-gray-600 text-center">
                            <span className="font-Fredoka text-gray-800 block text-3xl lg:text-5xl">23+</span>
                            <p>Total Volunteers</p>
                        </div>
                    </Fade>
                </div>
            </div>




            <div className="py-16 bg-white">
                <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
                    <Fade top>
                        <div className="flex items-center justify-center -space-x-2">
                            <img loading="lazy" width="220" height="220" src="https://tailus.io/sources/blocks/app/preview/images/avatars/second_user.webp" alt="member " className="w-8 h-8 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://tailus.io/sources/blocks/app/preview/images/avatars/first_user.webp" alt="member " className="w-12 h-12 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://tailus.io/sources/blocks/app/preview/images/avatars/third_user.webp" alt="member " className="z-10 w-16 h-16 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://tailus.io/sources/blocks/app/preview/images/avatars/first_user.webp" alt="member " className="relative w-12 h-12 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://tailus.io/sources/blocks/app/preview/images/avatars/second_user.webp" alt="member " className="w-8 h-8 object-cover rounded-full" />
                        </div>

                    </Fade>
                    <div className="m-auto space-y-6 md:w-8/12 lg:w-8/12">
                        <Fade top>
                            <h1 className="text-3xl text-gray-700 text-center md:text-4xl"> Make a Difference Today!</h1>

                        </Fade>
                        <Fade left>
                            <p className="text-center">Become a Volunteer Today. Help Hundreds of Childrens across the Country </p>
                        </Fade>

                        <div className="flex items-center justify-center">
                            <Fade bottom>
                                <Bounce delay={1000}>
                                    <Button className="">Join Today</Button>
                                </Bounce>

                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AboutUs /> */}

        </>

    )
}

export default About