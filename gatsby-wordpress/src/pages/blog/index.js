import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../../components/link"

import Seo from "../../components/seo"
import Navigation from "../../components/navigation"
import Container from "../../components/layout/container"
import BlogThumbnail from "./blogThumbnail"

const Blog = ({ data }) => {
  const newestData = data.allWpPost.nodes[0]
  const newestNewDate = new Date(newestData.date)
  const newestFormatedDate = `${newestNewDate.toLocaleString("default", {
    month: "long",
  })}, ${newestNewDate.getDay()} ${newestNewDate.getFullYear()}`
  const dataImage = getImage(newestData.featuredImage?.node.localFile.childImageSharp.gatsbyImageData)

  // console.log(newestData);
  return (
    <Container>
      <Seo title="Blog" />
      <Navigation isBackButton />
      <div className="blog-thumbnail newest-blog">
        <GatsbyImage
          className="thumbnail__image"
          image={dataImage}
          alt="about photo"
        />
        <span>New Article</span>
        <h1 className="thumbnail__title">{newestData.title}</h1>
        <div
          className="thumbnail__text"
          dangerouslySetInnerHTML={{ __html: newestData.excerpt }}
        />
        <div className="thumbnail__date">{newestFormatedDate}</div>
        <Link to={newestData.slug} className="thumbnail__link">
          Read Article
        </Link>
      </div>
      <div className="all-articles">
        <h2 className="title-section">All Articles</h2>

        <div className="all-articles__container">
          {data.allWpPost.nodes
            .filter((_, index) => {
              return index !== 0
            })
            .map((value, index) => {
              const newDate = new Date(value.date)
              const formatedDate = `${newDate.toLocaleString("default", {
                month: "long",
              })}, ${newDate.getDay()} ${newDate.getFullYear()}`

              return (
                <BlogThumbnail
                  key={index}
                  image={
                    value.featuredImage?.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  title={value.title}
                  text={value.excerpt}
                  date={formatedDate}
                  link={value.slug}
                />
              )
            })}
        </div>

        <div className="all-articles__link">
          <Link to="/" className="btn btn--large">
            See all articles
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allWpPost(sort: { order: DESC, fields: [date] }, limit: 4) {
      nodes {
        title
        excerpt
        date
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: BLURRED
                  height: 500
                )
              }
            }
          }
        }
      }
    }
  }
`
