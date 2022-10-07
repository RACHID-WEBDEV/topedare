import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import blogdata from '../data/blog';
// import BlogCard from '../components/section/BlogCard';

import Helmets from './Helmet';
import Pagination from '../components/Pagination';
import { LargeBlogcard } from '../components/BlogCards';

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
            <Helmets title="Our Blog Page" />
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16  ">
                    <div className="container">
                        {/* <div className="flex items-center gap-2 flex-wrap"> */}
                        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {displayUsers}
                        </div>
                        {setShowPost &&
                            <Pagination pageCount={pageCount} onPageChange={changePage} />
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog