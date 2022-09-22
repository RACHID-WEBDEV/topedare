import React from 'react'
import BlogImg from "../../assets/images/gallery-v1-3.jpg"
import { Link } from 'react-router-dom';
import SectionSubTitle from './SectionSubTitle';
import Button from '../form/Button';
import { Fade } from 'react-reveal';

const BlogIntro = () => {
    return (
        <div className="my-14 bg-tdf-bg py-8 lg:px-10 lg:py-16">
            <Fade top>
                <SectionSubTitle className="text-center " subTitle="Daily Updates" />

            </Fade>
            <Fade bottom>
                <p className="text-center text-gray-600">Latest news and articles directly
                    coming from the blog</p>
            </Fade>
            <div className="p-4 lg:p-12 flex flex-col lg:flex-row lg:space-x-20 ">
                <div className="lg:w-6/12">
                    <img className="w-full h-72 rounded-xl mb-6" alt="blog" src={BlogImg} />
                    <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">NEWS</span>
                    <h1 className="text-gray-800 font-semibold my-3 font-DmSans text-xl two-row-paragraph">Rise of Global Charity in Modern World</h1>
                    <p className="text-gray-500 text-base mb-3 two-row-paragraph">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa....</p>
                    <Link to="" className="underline">Read more</Link>
                </div>
                <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <img className="rounded-xl h-28 lg:h-36  w-full" alt="blog" src={BlogImg} />
                                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">PRESS RELEASE</span>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 font-DmSans text-xl font-bold two-row-paragraph">How to become a Good Volunteer Today</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-base two-row-paragraph">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa....</p>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <img className="rounded-xl h-28 lg:h-36 w-full" alt="blog" src={BlogImg} />
                                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 font-DmSans text-xl font-bold two-row-paragraph">Empower the Dropout Innocents is Key</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-base two-row-paragraph">Zoom was never created to be a consumer product. Nonetheless, the...</p>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <img className="rounded-xl h-28 lg:h-36 w-full" alt="blog" src={BlogImg} />
                                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 font-DmSans text-xl font-bold two-row-paragraph">Donation is Hope for Poor Childrens in Africa</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-base two-row-paragraph">This year, investors have reaped big financial returns from betting on Zoom...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="blog">
                <div className="flex items-center justify-center">
                    <Button>Read More</Button>

                </div>
            </Link>
        </div>
    )
}

export default BlogIntro