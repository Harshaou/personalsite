import React, {useEffect} from "react"
import Layout from "../components/Common/layout"
import { navigate } from 'gatsby'

export default ({ location }) => {

    useEffect(() => {
        const backToHome = setTimeout(() => {
          navigate('/')
        }, 2000);
        return () => clearTimeout(backToHome);
      }, []);
 
    return (
        <Layout
            seo={{
                title: "Thank you",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                    Thank you, Will reach you back. 
                    </h2>
                </div>
            </div>
           
        </Layout>
    )
}
