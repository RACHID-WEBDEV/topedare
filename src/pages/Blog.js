import React from 'react'
import PagesIntro from './../components/global/PagesIntro';
import BlogPhoto from "../assets/project/empower-woman.jpg"
import blogdata from '../data/blog';
import BlogCard from '../components/section/BlogCard';

const Blog = () => {
    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-16 px-2 lg:px-16 ">
                    <div className="container">
                        <div className="flex flex-wrap -my-4 -px-4">
                            {
                                blogdata.map(({ blogImg, comments, description, date, title, url }, idx) => (
                                    <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
                                ))
                            }


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog