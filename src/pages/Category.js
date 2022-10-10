import React, { useState, useEffect } from 'react'
import PagesIntro from '../components/global/PagesIntro';
import blogdata from '../data/blog';
// import BlogCard from '../components/section/BlogCard';
import { useLocation } from 'react-router-dom';
import { kebabCase } from '../utils/utils'
import Helmets from './Helmet';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import Pagination from '../components/Pagination';
import { LargeBlogcard } from '../components/BlogCards';
import BlogBtn from '../components/form/BlogBtn';
import useSWR from 'swr';
import parse from "html-react-parser";


const Blog = () => {

    const { pathname } = useLocation()
    const categoryPath = pathname.replace('/blog/category/', '')
    // let posts = blogdata.filter((blog) => kebabCase(blog.category) === categoryPath.toLowerCase());

    const { data, error } = useSWR(`${process.env.REACT_APP_BASE_URL}public/content/posts?user=${process.env.REACT_APP_USER_lOGIN_ID}`)
    if (error) console.log(error)


    const filterCategory = data?.data?.posts?.map(({ category }) => {
        return category
    })
    const getCategory = filterCategory?.map(({ label }) => {
        return label
    })

    // console.log('filterCa', getCategory.filter((label) => kebabCase(label) === categoryPath.toLowerCase()))

    const categoryData = getCategory?.filter((label) => kebabCase(label) === categoryPath.toLowerCase())

    console.log('categoryData', categoryData)
    // const showPosts = data?.data?.posts
    // console.log('showPosts', (showPosts))

    // const catResult = filterCategory?.reduce((acc, item) => {
    //     if (!acc[item.label]) {
    //         return { ...acc, [item.label]: 1 };
    //     }
    //     return { ...acc, [item.label]: acc[item.label] + 1 }

    // }, [])
    // console.log('catResult', catResult)



    // const [showPost, setShowPost] = useState(posts.slice(0, 18))

    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 3;
    const pagesVisited = pageNumber * postPerPage;

    // const displayPosts = categoryData?.slice(pagesVisited, pagesVisited + postPerPage)?.map(({ title, image, category, content, id }) => (
    //     <>
    //         <LargeBlogcard key={id} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))
    //         } />
    //     </>
    // ))

    const pageCount = Math.ceil(categoryData?.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <Helmets title="Our Category Page" />
            <PagesIntro title="Category " />
            <div>
                <div className="py-10 px-2 lg:px-16  ">
                    <Fade bottom>
                        <SectionSubTitle className="text-center capitalize pb-5" subTitle={`Category - ${categoryPath.replaceAll('-', " ")}`}
                        />


                    </Fade>
                    {/* {
                        !displayPosts &&
                        <>
                            <Fade bottom>
                                <SectionSubTitle className="text-center pb-5" subTitle="No Category found" />
                            </Fade>
                        </>
                    } */}

                    <div className="container">
                        {/* <div className="flex items-center gap-2 flex-wrap"> */}
                        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {/* {displayPosts} */}

                        </div>
                        {/* {setShowPost &&
                            <Pagination pageCount={pageCount} onPageChange={changePage} />
                        } */}
                        <div className="flex items-center justify-center mt-6">
                            <BlogBtn title="Go Back" url={-1} arrow={false} />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog