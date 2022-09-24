import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import blogdata from '../data/blog';
// import BlogCard from '../components/section/BlogCard';
// import ReactPaginate from "react-paginate";
// import { Link } from 'react-router-dom';
// import { LeftArrow, RightArrow } from '../assets/svgsIcons';

import { Link } from 'react-router-dom'
import BlogBtn from '../components/form/BlogBtn'

export const BlogCard = (props) => {
    const { blogImg, comments, description, date, title, url } = props.data;
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 my-4">
            <div className="border border-solid border-gray-300 p-3 rounded-lg md:p-5 group">
                <div className="mb-6">
                    <Link to={url} className="overflow-hidden rounded-md block">
                        <img className="transform group-hover:scale-110 h-60 rounded-md transition-transform duration-500 w-full" src={blogImg} alt="blog" />
                    </Link>
                </div>
                <h3>
                    <Link to={url} className="block text-2xl md:text-md hover:text-tdf-blue-50 transition-all font-bold text-gray-800 pb-[10px] leading-[1.3] two-row-paragraph ">{title}</Link></h3>

                <p className="font-normal text-lg text-gray-600  three-row-paragraph ">{description}</p>
                <div className="pt-4 mb-6 text-gray-400">
                    <ul className="flex flex-wrap items-center  ">
                        <li className="text-sm">
                            <p className="text-sm text-dark transition-all">{date}</p>
                        </li>
                        <span className="inline-block mx-2">\</span>
                        <li className="text-sm">
                            <p className="text-sm text-dark transition-all">{comments} comments</p>
                        </li>
                    </ul>
                </div>
                <BlogBtn title="Blog details" url="/blog-details" />


            </div>
        </div>
    )
}

export const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    return (
        <div>
            <div className="py-10 px-2 lg:px-16 text-center ">
                <div className="container">
                    <div className="flex items-center flex-wrap">

                        {getPaginatedData().map((d, idx) => (
                            <RenderComponent key={idx} data={d} />
                        ))}




                    </div>
                </div>

                <div className="pagination mt-5">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        prev
                    </button>

                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${currentPage === item ? 'active' : null}`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}

                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className={`next ${currentPage === pages ? 'disabled' : ''}`}
                    >
                        next
                    </button>
                </div>
            </div>
        </div>
    )
}



const Blog = () => {

    const [users, setUsers] = useState(blogdata.slice(0, 30))

    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                {/* <div className="py-10 px-2 lg:px-16 text-center ">
                    <div className="container">
                        <div className="flex items-center flex-wrap"> */}
                {
                    setUsers &&
                    <div>
                        {users.length > 0 ? (
                            <>
                                <Pagination
                                    data={users}
                                    RenderComponent={BlogCard}
                                    // title="Posts"
                                    pageLimit={5}
                                    dataLimit={6}
                                />
                            </>
                        ) : (
                            <h1>No Posts to display</h1>
                        )}

                    </div>
                }







                {/* </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Blog