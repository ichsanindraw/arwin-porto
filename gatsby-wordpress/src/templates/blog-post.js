import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import BackToHome from "../components/backToHome"
import Link from "../components/link"

const BlogPost = ({ data }) => {
  const selectedBlog = data.selectedBlog.nodes[0]
  const allBlogs = data.allBlogs

  return (
    <div className="blog-detail">
      <div className="sidebar-blog">
        <div className="sidebar-blog__header">
          <BackToHome />
          <h2 className="title-section">Personal Learnings</h2>
        </div>

        <div className="sidebar-blog__list">
          {allBlogs.nodes.map((node, index) => {
            console.log(`${node.slug} || ${selectedBlog.blog}`);
            return (
              <BlogSideBar
                key={index}
                slug={node.slug}
                active={node.slug === selectedBlog.slug}
                title={node.title}
                date={node.date}
              />
            )
          })}
        </div>
      </div>
      <div className="blog-detail__content">
        <GatsbyImage
          className="blog-detail-image"
          image={getImage(selectedBlog.featuredImage?.node.localFile.childImageSharp.gatsbyImageData)}
          alt="blog detail - featured image"
        />
        <h1 className="blog-detail-title">{selectedBlog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
      </div>
    </div>
  )
}

const BlogSideBar = ({ slug, active, title, date }) => {
  const newDate = new Date(date)
  const formatedDate = `${newDate.toLocaleString("default", {
    month: "long",
  })}, ${newDate.getDay()} ${newDate.getFullYear()}`

  return (
    <Link
      to={slug}
      className={active ? "sidebar-blog__link active" : "sidebar-blog__link"}
    >
      <h1 className="sidebar-blog__title">{title}</h1>
      <div className="sidebar-blog__date">{formatedDate}</div>
    </Link>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    selectedBlog: allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
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
    allBlogs: allWpPost(sort: { order: DESC, fields: [date] }) {
      nodes {
        title
        date
        slug
      }
    }
  }
`
