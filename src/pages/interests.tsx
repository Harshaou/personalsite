import React from "react"
import Layout from "../components/Common/layout"
import ReactPlayer from 'react-player/lazy'

export default ({ location }) => {
 
    return (
        <Layout
            seo={{
                title: "Contact",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Interests
                    </h2>
                    <ReactPlayer width="640" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
           
        </Layout>
    )
}
