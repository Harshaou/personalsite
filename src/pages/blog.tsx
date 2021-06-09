import React from "react"
import Layout from "../components/Common/layout"
import Blog from '../components/Blog'

export default ({ location }) => {
 
    return (
        <Layout
            seo={{
                title: "Blog",
            }}
            location={location}
        >
        <div className="container mx-auto px-0 mb-32 ">
            <div className="pt-20 pb-10 text-center lg:pt-40 lg:pb-20">
                <h2 className="text-color-1 font-black text-4xl lg:text-5xl">
                    Blog
                </h2>
            </div>
            <Blog />
        </div>
           
        </Layout>
    )
}
