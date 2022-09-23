import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blogImg, comments, description, date, title, url }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 my-4">
            <div className="border border-solid border-gray-300 p-3 rounded-lg md:p-5 group">
                <div className="mb-6">
                    <Link to={url} className="overflow-hidden rounded-md block">
                        <img className="transform group-hover:scale-110 h-60 rounded-md transition-transform duration-500 w-full" src={blogImg} alt="blog" />
                    </Link>
                </div>
                <h3>
                    <Link to={url} className="block text-2xl md:text-md hover:text-tdf-blue-50 transition-all font-bold text-gray-800 pb-[10px] leading-[1.3] two-row-paragraph ">{title}</Link></h3>

                <p className="font-normal text-base text-gray-600  three-row-paragraph ">{description}</p>
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

                <Link to={url} className="bg-white inline-flex items-center group transition-all hover:bg-tdf-blue-50 hover:border-tdf-blue-100 hover:text-white text-gray-700 capitalize font-medium text-sm border border-solid border-gray-300 px-8 py-4 leading-none rounded-md " href="blog-details.html">Blog details

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 
            pt-0.5 transition-transform transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>

            </div>
        </div>
    )
}

export default BlogCard