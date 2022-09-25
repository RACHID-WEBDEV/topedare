import React, { useState, useEffect } from 'react'
import BlogCard from '../src/components/section/BlogCard';
import ReactPaginate from "react-paginate";


const Blogtest = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const url = 'https://jsonplaceholder.typicode.com/posts';



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

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = posts
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(({ blogImg, comments, body, date, title, url, id }, idx) => (
            <BlogCard key={idx} blogImg={blogImg} comments={comments} description={body} date={id} title={title} url={url} />
        ))

    const pageCount = Math.ceil(posts.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            {displayUsers}

            {/* {setUsers && */}
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
        </div>
    )
}

export default Blogtest