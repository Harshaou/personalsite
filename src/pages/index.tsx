import React, { useEffect, useRef, useState } from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Common/layout"

import Portfolio from "../components/WorksSection"
import ItemBlog from "../components/Common/item-blog"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"
import Wall from '../components/Home/Banner'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/ContactMe'

// Render a YouTube video player


export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata

    return (
        <Layout
            front={true}
            seo={{
                title: "Home",
                description: siteData.description,
            }}
            navPlaceholder={false}
            location={location}>

            <Wall data={siteData} />
            {siteData.about !== "" && 
            <About data={siteData.about} />}
            <div className="px-4 lg:px-0" id="portfolio">
                <Portfolio />
            </div>
            <Blog> 
                {data.blog.edges.map(item => (
                    <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
                ))}
            </Blog>
            <Contact data={siteData.contact} />

        </Layout>
    )
}


export const query = graphql`
    query IndexPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                ogImage
                twoColumnWall
                introTag
                description
                about
                contact {
                    api_url
                    description
                    mail
                    phone
                    address
                }
                social {
                    name
                    url
                    icon
                }
            }
        }
        blog: allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "DD MMMM YYYY")
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
