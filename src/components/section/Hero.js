

import { Link } from "react-router-dom";

import Button from '../form/Button'
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';





function Hero() {


    return (
        <div className="relative ">
            <section className="relative w-full h-full top-0 left-0 object-cover object-[83%]  bg-cover bg-center bg-woman-bg"  >
                <div className="home__container containerbox gridbox">

                    <div className="flex items-center mx-auto justify-center max-w-[61.25rem]">
                        <div className="pb-24 pt-48 lg:pt-72  text-center ">
                            <Fade top >
                                <h1 className="font-display mb-6 text-[3rem] leading-[3.75rem] tracking-wider lg:text-6xl xl:text-7xl animated text-white">
                                    The Tope Dare Foundation
                                </h1>

                            </Fade>
                            <Fade left delay={1000}>
                                <p className="text-white three-row-paragraph max-w-4xl mx-auto mb-8 lg:text-[1.375rem] text-[1.125rem] leading-8  2xl:text-xl ">The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to the society and helping the less privileged and vulnerable in our communities to alleviate human sufferings </p>
                            </Fade>
                            <div className="inline-flex space-x-4">

                                <Fade bottom delay={2000}>
                                    <Link to="">

                                        <Button className="">Learn More</Button>

                                    </Link>
                                </Fade>

                                <Fade bottom delay={2000}>
                                    <ScrollLink activeClass="active" to="how-to-enter" spy={true} offset={-30} smooth={true} duration={500}>
                                        <Button className="hidden lg:flex" color="secondary">Donate Nowr</Button>
                                    </ScrollLink>
                                </Fade>


                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* <Container>
                <Fade top>
                    <div className="gradient-line mx-auto"></div>
                </Fade>
            </Container> */}
        </div>
    );
}

export default Hero;
