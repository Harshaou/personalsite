import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Calendar } from "react-feather"



export const ItemBlog  = ({item}: any) => {

    const [focused, changeFocused] = useState(false);

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/3 p-4">
        <div className={`transition-all duration-300 hover:shadow-2xl shadow ${focused && 'focused'}`}>
            <a href="https://harsh-haou.medium.com/ive-a-breathtaking-idea-3617b9db6c6" target="_blank" title={"lll"} onFocus={() => changeFocused(true)} onBlur={() => changeFocused(false)}>
                <div className="image">
                    <img src={item.img} alt="cfwefv" />
                    
                </div>
                <div className="p-4 py-3">
                    <h4 className="text-color-2 font-black text-3xl pt-1">
                        {item.title}
                    </h4>
                    <div className="flex items-center text-secondary">
                        <Calendar className="stroke-current"/>
                        <p className="pl-2 text-color-default font-sans">29 June 2019</p>
                    </div>
                    <p className="pt-3 text-color-default">
                        {item.description}
                      
                    </p>
                </div>
            </a>
        </div>
    </div>
    )
}

export default ItemBlog;