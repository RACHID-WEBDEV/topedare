import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import blogdata from '../data/blog';
import BlogCard from '../components/section/BlogCard';
import ReactPaginate from "react-paginate";
import { LeftArrow, RightArrow } from '../assets/svgsIcons';

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
        .map(({ blogImg, comments, description, date, title, url }, idx) => (
            <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
        ))

    const pageCount = Math.ceil(showPost.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16 text-center ">
                    <div className="container">
                        <div className="flex items-center flex-wrap">
                            {displayUsers}

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

            </div>
        </>
    )
}

export default Blog