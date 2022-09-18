import React, { useState, useEffect } from 'react';
import { routes } from "../../data/global";
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { Logo } from "./Logo"
import { Discord, Facebook, Instagram, LoveIcon, Tiktok, Twitter, } from '../../assets/svgsIcons.js';
// import { useNavigate } from 'react-router-dom';

function Menu({ children, open }) {
    return (
        <div
            className={classNames('fixed top-0 z-50 backdrop-blur h-full max-h-screen overflow-y-auto text-bg dark:text-white dark:bg-bg bg-white transition-all duration-700 ', { 'w-full': open }, { 'w-0': !open })}
        >
            {children}
        </div>
    );
}

function MenuContainer({ children }) {
    return <div className='relative top-1/4 w-full mt-8 overflow-y-auto'>{children}</div>;
}

export const Header = ({ homePage, title, desc, currentPage }) => {
    //  const currentUserRoute = useNavigate();

    const [top, setTop] = useState(true);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };


    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <>
            <header
                className={classNames("fixed top-0 font-black z-40 w-full transition-colors ",
                    { 'bg-white/70 backdrop-blur border-b-2 border-white dark:border-bg text-bg dark:text-white dark:bg-bg/70 dark:backdrop-blur': !top }, {
                    "bg-bg/70  backdrop-blur text-black/80 dark:bg-bg-100 dark:text-bg dark:backdrop-blur": top
                })}

            >
                <div className="flex items-center px-3  py-3 lg:py-2 lg:px-16">
                    <span className="shrink-0">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </span>


                    {/* Menu / Actions */}
                    <div className="dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                        <nav className="navbar w-full">
                            <ul className="flex flex-col lg:flex-row">

                                {routes.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={classNames("list-none py-3 px-5 font-semibold font-lg  hover:text-tdf-blue-100", { "text-tdf-blue-100": currentPage }, { "text-gray-800": !currentPage })}
                                        >
                                            <Link to={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}

                                <li>

                                    <button type="button" className="text-white bg-tdf-blue-50 hover:bg-tdf-blue-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center">
                                        Donate now
                                        <span className="ml-2 -mr-1">
                                            <LoveIcon className=" w-5 h-5" />
                                        </span>
                                    </button>



                                </li>

                            </ul>
                        </nav>

                    </div>
                    {/* Mobile Menu Actions */}
                    <div className="ml-auto flex lg:hidden group">
                        <button
                            className="border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            aria-label="open mobile menu"
                            onClick={toggle}
                        >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-bg lg:group-hover:fill-pink group-focus:fill-bg dark:fill-bg"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>


                    </div>
                </div>

            </header>

            <Menu open={open}>
                <div className="sticky bg-white top-0 mx-4 z-50">
                    <div className="flex z-50 items-center px-3 pb-3 pt-4 justify-between">
                        <span className="shrink-0">
                            <Logo />
                        </span>
                        <button type="button" onClick={toggle} className="btn-close" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 h-6 w-6 dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                            </svg>
                        </button>

                    </div>

                </div>
                <div className="relative mt-10 overflow-y-auto mx-7 ">
                    <MenuContainer>

                        <nav className="navbar w-full">
                            <ul className="flex flex-col lg:flex-row">
                                {routes.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="list-none py-3 px-5 text-xl  font-semibold 
                                                opacity-100
                                                transition-opacity"

                                        >
                                            <Link to={item.path}>
                                                {item.title}
                                            </Link>


                                        </li>
                                    );
                                })}

                            </ul>
                        </nav>
                    </MenuContainer>
                    <div className="my-10 w-full lg:hidden">

                        <div className="text-center flex items-center justify-center">
                            <div className="cursor-pointer w-60 font-bold whitespace-nowrap px-8 py-3 text-bg dark:text-white border-2 text-xl rounded-full dark:border-white border-bg hover:bg-pink hover:text-white hover:border-pink transition-colors">
                                Tell me more
                            </div>


                        </div>
                        <hr className="dark:bg-white bg-bg my-5 h-px border-0" />
                        {/* Socials */}
                        <div className="flex items-center justify-center space-x-5">
                            <Link to="" className="group">
                                <Facebook width={20} height={20} />
                            </Link>
                            <Link to="" className="group">
                                <Twitter width={20} height={20} />
                            </Link>
                            <Link to="" className="group">
                                <Discord width={20} height={20} />
                            </Link>
                            <Link to="" className="group">
                                <Instagram width={20} height={20} />
                            </Link>
                            <Link to="" className="group">
                                <Tiktok width={20} height={20} />
                            </Link>



                        </div>
                    </div>
                </div>


            </Menu>

        </>


    );
};
export default Header;
