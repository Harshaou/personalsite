import React from "react"
import { graphql, PageProps } from "gatsby"
import Portfolio from "../components/PortfolioItem"
import Layout from "../components/SmallComponets/layout"
import { PortfolioQuery } from "./__generated__/PortfolioQuery"

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