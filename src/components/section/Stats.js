import React from "react";
import SectionTitle from "./SectionTitle";
// import SectionSubTitle from './SectionSubTitle';
import { Fade } from "react-reveal";
import mapbg from '../../assets/cta/map-bg.png'
import map from '../../assets/cta/serving-map2.png'
import useSWR from "swr";
import parse from 'html-react-parser';


export default function Stats() {
    const { data, error } = useSWR(`${process.env.REACT_APP_BASE_URL}public/content/components?user=${process.env.REACT_APP_USER_lOGIN_ID}`)

    if (error) return console.log(error)

    if (!data) {
        return <h1>Loading...</h1>
    }
    const stats = data?.data?.components?.find(({ slug }) => {
        return slug === "project-stats"
    })
    const stats1 = data?.data?.components?.find(({ slug }) => {
        return slug === "project-stats-1"
    })
    const stats2 = data?.data?.components?.find(({ slug }) => {
        return slug === "project-stats-2"
    })
    const stats3 = data?.data?.components?.find(({ slug }) => {
        return slug === "project-stats-3"
    })
    const stats4 = data?.data?.components?.find(({ slug }) => {
        return slug === "project-stats-4"
    })

    return (
        <div className="bg-white">
            <div className="xl:px-16 px-4 py-10 xl:mx-auto xl:container">
                <Fade top>
                    <SectionTitle title="Working on Charity" />

                </Fade>
                {stats && <div className="max-w-[45rem]">
                    <Fade bottom>
                        <div>
                            {parse(stats?.description)}
                        </div>
                    </Fade>
                </div>}


                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src={map} alt="world map drawing " className="w-full xl:h-full h-96 object-fill sm:block hidden" />
                    <img src={mapbg} alt="mobile world map drawing" className="sm:hidden -mt-10 block w-full h-96  object-fill absolute z-0" />
                    {stats1 &&
                        <Fade top>
                            <div className="shadow-lg xl:p-6 p-4 w-52 sm:w-auto hidden lg:block lg:right-80 lg:top-[-300px] bg-white sm:absolute relative z-30 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                                {parse(stats1?.description)}
                            </div>
                        </Fade>}

                    {stats2 &&
                        <Fade left>
                            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                                {parse(stats2?.description)}
                            </div>
                        </Fade>}

                    {stats3 &&
                        <Fade bottom>
                            <div className="shadow-lg xl:p-6 p-4 w-52 sm:w-auto  bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                                {parse(stats3?.description)}
                            </div>
                        </Fade>}

                    {stats4 && <Fade right>
                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                            {parse(stats4?.description)}
                        </div>
                    </Fade>}
                </div>
            </div>
        </div>
    );
}
