import React from "react"
import Layout from "../components/SmallComponets/layout"

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
                        Intrests
                    </h2>
                </div>
            </div>
           
        </Layout>
    )
}
