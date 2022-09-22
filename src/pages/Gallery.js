import React from 'react'
import PagesIntro from './../components/global/PagesIntro';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import CTA from './../components/section/CTA';
import SectionTitle from './../components/section/SectionTitle';

const Gallery = () => {
    return (
        <div>
            <PagesIntro title="Our Gallery" />
            <div className="hidden lg:block">
                <Fade bottom>
                    <SectionSubTitle className="text-center" subTitle="We Love To Help The Poor" />
                </Fade>

            </div>
            <section className="py-6  dark:text-gray-50">
                <div className="px-5 lg:px-14">
                    <div className="relative">
                        <Fade top>
                            <SectionTitle title="Our Gallery" />
                        </Fade>
                        <Fade left>
                            <div className="max-w-2xl">
                                {/* We believe they have a future bright with hope if we assist them */}
                                <SectionSubTitle subTitle=" Spread Love with Donations" />
                                <p className=" mb-10 text-gray-600">
                                    Here some of the Categories and Sector we Work regularly, We believe they have a future bright with hope if we assist them </p>

                            </div>
                        </Fade>

                    </div>
                </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <div className="img-info overflow-hidden group rounded-xl w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
                        <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 rounded-xl group-hover:scale-105 transition-transform duration-700 aspect-square" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>

                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-110 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?0" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>

                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?1" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?2" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?3" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?4" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?5" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?6" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img alt="" className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://source.unsplash.com/random/200x200/?7" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>
                    </div>

                    <div className="img-info overflow-hidden group rounded-xl w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
                        <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-sm min-h-96 md:col-start-1 md:row-start-3 rounded-xl group-hover:scale-110 transition-transform duration-700 aspect-square" />

                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Image Info</h1>
                            <p className="text-base" >Lorem Ipsum is simply dummy </p>
                        </div>

                    </div>


                </div>
            </section>


            <CTA />
            <div className=" w-full mt-[-60px] pb-2 bg-tdf-bg border-b border-gray-400">

            </div>
        </div>
    )
}

export default Gallery