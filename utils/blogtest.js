import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
// import blogdata from '../data/blog';
// import BlogCard from '../components/section/BlogCard';
// import ReactPaginate from "react-paginate";
// import { Link } from 'react-router-dom';
// import { LeftArrow, RightArrow } from '../assets/svgsIcons';

export const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
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
            <h1>{title}</h1>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>

            {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
            <div className="pagination">
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
    )
}



const Blog = () => {




    const url = 'https://jsonplaceholder.typicode.com/posts';

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;

    function Post(props) {
        const { id, title, body } = props.data;
        return (
            <div className="post">
                <small>{id}</small>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }



    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16 text-center ">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div>
                                {posts.length > 0 ? (
                                    <>
                                        <Pagination
                                            data={posts}
                                            RenderComponent={Post}
                                            // title="Posts"
                                            pageLimit={5}
                                            dataLimit={10}
                                        />
                                    </>
                                ) : (
                                    <h1>No Posts to display</h1>
                                )}
                            </div>

                            {/* <div>
                                {posts.length > 0 ? (
                                    <>
                                        <Pagination
                                            data={posts}
                                            RenderComponent={BlogCard}
                                            title="Posts"
                                            pageLimit={5}
                                            dataLimit={10}
                                        />
                                    </>
                                ) : (
                                    <h1>No Posts to display</h1>
                                )}
                            </div> */}


                            {/* {
                                blogdata.map(({ blogImg, comments, description, date, title, url }, idx) => (
                                    <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
                                ))
                            } */}

                            {/* {displayUsers} */}
                            {/*<RightArrow /> <LeftArrow /> */}
                            {/* {setUsers &&
                                <ReactPaginate
                                    previousLabel={"Prev"}

                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    // disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />

                            } */}


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog