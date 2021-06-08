import React from "react"
import { graphql, PageProps } from "gatsby"
import Portfolio from "../components/PortfolioItem"
import Layout from "../components/Common/layout"
import { PortfolioQuery } from "./__generated__/PortfolioQuery"
import { Button } from "../components/Common/ui"
import { ArrowRight } from "react-feather"


export default ({data, location}: PageProps<PortfolioQuery, {}>) => {
 
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
                        Works
                    </h2>
                </div>

            <div className="px-4 lg:px-0" id="portfolio">
            {data.allMdx.edges.map((item, _) => (
                <Portfolio
                    data={item.node}
                    key={`p-item-index-${item.node.id}`}
                    even={(_ + 1) % 2 === 0} />
                ))}
            </div>

           
            <div className="flex flex-col items-center mb-32 mt-32">
              <h1 className="text-5xl font-black text-color-1">Projects done</h1>
              <h1 className="text-2xl ">before landing job at Webdura</h1>
              <img className="mb-20 mt-20" src="./images/old-project.png" alt="old-project" />

              
            
             <div className="flex">
              <a className="m-1 text-green-700" target="_blank" href="https://harshaou.github.io/portfolio/">
                Visit old portfolio</a>
              <ArrowRight className="m-1" />
             </div>
            </div>
            </div>
           
        </Layout>
    )
}

export const query = graphql`
  {
    allMdx(filter: {fields: {sourceName: {eq: "portfolio"}}}, limit: 6) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            stack
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`