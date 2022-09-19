/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from './SectionSubTitle';
import { Fade } from 'react-reveal'
import Health from '../../assets/section/health-care.svg'
import Education from '../../assets/section/charity-education.svg'
import Employment from '../../assets/section/work.svg'
import SectionImg from '../../assets/section/section-img.jpg'



const WhatWeDo = () => {
    return (
        <>
            <section className="relative overflow-hidden ">
                <div className="py-16">
                    <div className="px-5 lg:px-12">
                        <div className="relative">
                            <Fade top>
                                <SectionTitle title="What We do" />
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
                    <div className="relative px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="absolute inset-0">
                            <div className="absolute inset-y-0 z-0 w-full h-full bg-white custom-shadow rounded-md lg:w-3/4" />
                        </div>

                        <div className="relative">
                            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                                <div className="grid gap-10 row-gap-5">
                                    <div className>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                                            <Fade left>
                                                <div className="flex p-4 shadow-md">
                                                    <div className="mr-6">
                                                        <img src={Health} width={80} height={80} alt="health icon" className="min-w-[40px] min-h-[40px]" />

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Health</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Helping those in need of basic medical health care get and stay healthy for life by teaching good habits, payment of hospital bills and provision of drugs and equipment.</p>
                                                    </div>
                                                </div>

                                            </Fade>
                                            <Fade bottom>
                                                <div className="flex p-4 shadow-md">
                                                    <div className="mr-6">
                                                        <img src={Education} width={65} height={65} alt="health icon" className="min-w-[40px] min-h-[40px]" />
                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Education</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Keeping kids in school through tutoring, computer courses and financial aid as education serves as a panacea for socio-economic.</p>
                                                    </div>
                                                </div>

                                            </Fade>

                                            <Fade top>
                                                <div className="flex p-4 shadow-md">
                                                    <div className="mr-6">
                                                        <img src={Employment} width={65} height={65} alt="health icon" className="min-w-[40px] min-h-[40px]" />

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Employment</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Providing an avenue to train unemployed youths with the necessary skills to get jobs and start a career or profession for financial freedom.</p>
                                                    </div>
                                                </div>

                                            </Fade>


                                            <Fade bottom>
                                                <div className="flex p-4 shadow-md">
                                                    <div className="mr-6">
                                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Empowerment</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Promoting empowerment of the unemployed in achieving poverty eradication, social integration and full employment integration for our youth and women.</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>




                                    </div>

                                </div>
                                <Fade right>
                                    <div className="order-first lg:order-last">
                                        <img src={SectionImg} width={80} height={80} alt="SectionImg icon" className="object-cover w-full  h-full rounded-lg shadow-lg min-w-[0px] min-h-[0px]" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


















        </>
    );
};

export default WhatWeDo;




// const WhatWeDo = () => (
//     <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
//         <div className="text-center">
//             <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
//                 <div className="bg-accent inline-flex h-12 w-12 items-center justify-center rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-5 w-5 fill-white">
//                         <path fill="none" d="M0 0h24v24H0z" />
//                         <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
//                     </svg>
//                 </div>
//             </div>
//             <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">1. Headline Sponsor (Pre-Event)</h3>
//             <p className="text-jacarta-700 dark:text-jacarta-300">
//                 A dedicated ‘sponsor announcement’ in our e-newsletter outlining your involvement is sent to our database of senior sustainability professionals and other direct PR-related opportunities through our communication partners. Social media will also include the announcement with other key information. Visible branding throughout our website. This includes a logo at the top of the Home Page alongside the Nigerian Fintech Awards logo.
//             </p>
//             <h6 className="text-jacarta-700 dark:text-jacarta-200 mt-2">  Headline Sponsor Investment: <b>₦2 Million</b></h6>

//         </div>
//         <div className="text-center">
//             <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
//                 <div className="bg-green inline-flex h-12 w-12 items-center justify-center rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-5 w-5 fill-white">
//                         <path fill="none" d="M0 0h24v24H0z" />
//                         <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
//                     </svg>
//                 </div>
//             </div>
//             <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">2. Event Day</h3>

//             <p className="text-jacarta-700 dark:text-jacarta-300 ">Branding throughout all tangible materials. Signage. On the screen presentation. Presentation of one award category to the winners with name-checks to stage and photo opportunity. Up to two in-person from your organization to attend the awards ceremony including pre-dinner drinks reception, meal and unlimited drinks.</p>
//         </div>
//         <div className="text-center">
//             <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
//                 <div className="bg-blue inline-flex h-12 w-12 items-center justify-center rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-5 w-5 fill-white">
//                         <path fill="none" d="M0 0h24v24H0z" />
//                         <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
//                     </svg>
//                 </div>
//             </div>
//             <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">3. Post-Event</h3>
//             <p className="text-jacarta-700 dark:text-jacarta-300">
//                 Mentions in all post-press-related material. The company branding will remain on the website and on all marketing materials associated with that year’s winners until promotions for the following year commence. This can be up to 12 months.                            </p>
//             <h6 className="text-jacarta-700 dark:text-jacarta-200 mt-2">Estimated Package Value: <b> ₦5 Million</b></h6>


//         </div>
//         <div className="text-center">
//             <div className="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
//                 <div className="bg-red inline-flex h-12 w-12 items-center justify-center rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-5 w-5 fill-white">
//                         <path fill="none" d="M0 0h24v24H0z" />
//                         <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
//                     </svg>
//                 </div>
//             </div>
//             <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">4. Category sponsor (Pre-Event)</h3>
//             <p className="text-jacarta-700 dark:text-jacarta-300">
//                 Inclusion in e-newsletter mailings headlining the Awards Category with your involvement and sent to our own database and other direct PR-related opportunities through our communication partners. Your branding on our website. This includes a logo on the home page linked to a sponsor page to highlight your sustainability policies and a link to your own website.
//             </p>
//         </div>
//     </div>
// )
// export default WhatWeDo