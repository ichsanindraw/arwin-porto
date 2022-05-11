import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Link from "../../components/link"

import Seo from "../../components/seo"
import Navigation from "../../components/navigation"
import Container from "../../components/layout/container"
import BlogThumbnail from "./blogThumbnail"

const Blog = ({ data }) => {
    console.log(data.allWpPost.nodes);
    const dataLength = data.allWpPost.nodes.length
    const newestData = data.allWpPost.nodes[dataLength - 1]
    const newestNewDate = new Date(newestData.date);
    const newestFormatedDate = `${newestNewDate.toLocaleString('default', { month: 'long' })}, ${newestNewDate.getDay()} ${newestNewDate.getFullYear()}`

    return (
        <Container>
            <Seo title="Blog"/>
            <Navigation isBackButton />
            {data.allWpPost.nodes.map((node) => {
                console.log(node);
            })}
            {/* {data.allWpPost.nodes} */}
            <div className="blog-thumbnail newest-blog">
                <StaticImage
                    className="thumbnail__image"
                    src="../../images/ex-blog1.png"
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="about photo"
                />
                <label>New Article</label>
                <h1 className="thumbnail__title">{newestData.title}</h1>
                <div className="thumbnail__text" dangerouslySetInnerHTML={{__html: newestData.excerpt}} />
                <div className="thumbnail__date">{newestFormatedDate}</div>
                <Link to={newestData.slug} className="thumbnail__link">Read Article</Link>
            </div>
            <div className="all-articles">
                <h2 className="title-section">All Articles</h2>

                <div className="all-articles__container">
                    {data.allWpPost.nodes.map((node) => {
                        const newDate = new Date(node.date);
                        const formatedDate = `${newDate.toLocaleString('default', { month: 'long' })}, ${newDate.getDay()} ${newDate.getFullYear()}`

                        return (
                            <BlogThumbnail
                                key={node.slug}
                                image="../../../images/ex-blog1.png"
                                title={node.title}
                                text={node.excerpt}
                                date={formatedDate}
                                url={node.slug}
                            />
                        )
                    })}
                </div>

                <div className="all-articles__link">
                    <Link to="/" className="btn btn--large">See all articles</Link>
                </div>
            </div>
        </Container>
    )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        date
        slug
      }
    }
  }
`