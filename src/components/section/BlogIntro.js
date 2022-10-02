import React from 'react'
import { Link } from 'react-router-dom';
import SectionSubTitle from './SectionSubTitle';
import Button from '../form/Button';
import { Fade } from 'react-reveal';
import blogdata from '../../data/blog';

export const LargeBlogcard = ({ blogPhoto, category, id, short_desc, title, slug }) => (
    <div className="lg:w-6/12 group">
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
        <Link to={`/blog/${id}`} className="underline">Read more</Link>
    </div>
)

export const SmallBlogcard = ({ blogPhoto, category, id, short_desc, title, slug }) => (
    <div className="lg:pb-4">
        <div className="flex space-x-5 ">
            <div className="w-6/12 lg:w-4/12">
                <div className="relative group">
                    <Link to={`/blog/${id}`}>
                        <div className="relative overflow-hidden rounded-md max-w-[200px] max-h-32 lg:max-h-40 ">
                            <img className="transform group-hover:scale-110 w-full h-full rounded-xl mb-6 transition-transform duration-500" src={blogPhoto} alt="blog" />
                            <span className="bg-yellow-300 absolute bottom-2 right-2 text-darken text-xs font-semibold px-4 py-1 uppercase  rounded-full">{category}</span>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="w-8/12">
                <Link to={`/blog/${id}`}>
                    <h1 className="text-gray-800 font-DmSans text-xl font-bold two-row-paragraph">{title}</h1>
                </Link>
                <p className="text-gray-500 my-1 text-sm lg:text-lg three-row-paragraph">{short_desc}</p>
            </div>
        </div>
    </div>
)

const BlogIntro = () => {
    return (
        <div className="my-14 bg-tdf-bg py-8 lg:px-10 lg:py-16">
            <Fade top>
                <SectionSubTitle className="text-center " subTitle="Daily Updates" />

            </Fade>
            <Fade bottom>
                <p className="text-center text-gray-600">Latest news and articles directly
                    coming from the blog</p>
            </Fade>
            <div className="p-4 lg:p-12 flex flex-col lg:flex-row lg:space-x-20 ">
                {
                    blogdata.slice(0, 1).map(({ blogImg, category, id, short_desc, title, url }, idx) => (
                        <LargeBlogcard key={idx} blogPhoto={blogImg} id={id} category={category} slug={url}
                            short_desc={short_desc} title={title} />
                    ))
                }

                <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
                    {
                        blogdata.slice(1, 4).map(({ blogImg, category, id, short_desc, title, url }, idx) => (
                            <SmallBlogcard key={idx} blogPhoto={blogImg} id={id} category={category} slug={url}
                                short_desc={short_desc} title={title} />
                        ))
                    }

                </div>
            </div>
            <Link to="blog">
                <div className="flex items-center mt-5 justify-center">
                    <Button>Read More</Button>

                </div>
            </Link>
        </div>
    )
}

export default BlogIntro