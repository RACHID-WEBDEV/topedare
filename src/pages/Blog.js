import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import blogdata from '../data/blog';
import BlogCard from '../components/section/BlogCard';
import ReactPaginate from "react-paginate";
import { LeftArrow, RightArrow } from '../assets/svgsIcons';
import { Link } from 'react-router-dom';
import BlogBtn from './../components/form/BlogBtn';

export const LargeBlogcard = ({ blogPhoto, category, id, short_desc, title, slug }) => (
    <div className="border border-gray-200  p-2 rounded-lg group">
        <Link to={`/blog/${id}`}>
            <div className="relative overflow-hidden rounded-md w-full max-h-96 h-80 ">
                <img className="transform group-hover:scale-110 w-full h-full rounded-xl mb-6 transition-transform duration-500" src={blogPhoto} alt="blog" />
                <span className="bg-yellow-300 absolute bottom-2 left-2 text-darken text-xs font-semibold px-4 py-1 uppercase  rounded-full">{category}</span>
            </div>
        </Link>
        <Link to={`/blog/${id}`}>
            <h1 className="text-gray-900 font-bold my-3 lg:mt-4 font-DmSans text-xl lg:text-2xl two-row-paragraph">{title}</h1>

        </Link>
        <p className="text-gray-600 text-base lg:text-xl mb-3  two-row-paragraph">{short_desc}</p>
        {/* <Link to={`/blog/${id}`} className="underline">Read more</Link> */}

        <BlogBtn title="Blog details" url={`/blog/${id}`} />

    </div>
)

const Blog = () => {

    const [showPost, setShowPost] = useState(blogdata.slice(0, 18))

    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 6;
    const pagesVisited = pageNumber * postPerPage;

    const displayUsers = showPost
        .slice(pagesVisited, pagesVisited + postPerPage)
        .map(({ blogImg, comments, description, date, title, id, url, category, short_desc }, idx) => (
            <>
                {/* <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} /> */}
                <LargeBlogcard key={idx} blogPhoto={blogImg} id={id} slug={url} comments={comments} category={category} description={description} date={date} title={title} short_desc={short_desc} />
            </>
        ))

    const pageCount = Math.ceil(showPost.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16  ">
                    <div className="container">
                        {/* <div className="flex items-center gap-2 flex-wrap"> */}
                        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {displayUsers}
                        </div>
                        {setShowPost &&
                            <ReactPaginate
                                previousLabel={<button type="button" className="text-tdf-blue-50 border border-tdf-blue-50 p-3 rounded-full hover:text-white hover:bg-tdf-blue-100 justify-center transition-colors gap-2 inline-flex items-center">
                                    <LeftArrow />
                                </button>}

                                nextLabel={<button type="button" className="text-tdf-blue-50 border border-tdf-blue-50 p-3 rounded-full hover:text-white hover:bg-tdf-blue-100 justify-center transition-colors inline-flex items-center">
                                    <RightArrow />
                                </button>}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog