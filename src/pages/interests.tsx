import React from "react"
import Layout from "../components/Common/layout"

export default ({ location }) => {
 
    return (
        <Layout
            seo={{
                title: "Interests",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Interests
                    </h2>
                   
                </div>
            </div>
           
        </Layout>
    )
}
