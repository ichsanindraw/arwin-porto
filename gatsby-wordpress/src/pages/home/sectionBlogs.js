import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Container from "../../components/layout/container"

const SectionBlogs = ({ data }) => {
  return (
    <section id="section-blog">
      <StaticImage
        className="home-rect home-rect3"
        src="../../images/rectangle-3.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="rectangle_3"
      />
      <StaticImage
        className="home-rect home-rect4"
        src="../../images/rectangle-4.png"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="rectangle_4"
      />
      <StaticImage
        className="home-rect home-rect5"
        src="../../images/rectangle-5.png"
        width={320}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="rectangle_5"
      />

      <Container>
        <div className="section-blog__container">
          <div>
            <h2 className="section-blog__title">Personal Thoughts</h2>
            <p className="section-blog__text">
              My random thoughts, write about what I've been working on,
              problems I've solved, and things I'm still trying to figure out.
            </p>
            <Link to="/blog" className="btn btn--medium btn--transparent-white">
              Visit Blog
            </Link>
          </div>
          <div>
            {data.allWpPost.nodes.map((node, index) => {
              const newDate = new Date(node.date)
              const formatedDate = `${newDate.getDay()} ${newDate.toLocaleString(
                "default",
                { month: "long" }
              )} ${newDate.getFullYear()}`
              return (
                <div key={index}>
                  <Link to={`blog/${node.slug}`} className="section-blog__blog-title">
                    {node.title}
                  </Link>
                  <p className="section-blog__blog-date">{formatedDate}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionBlogs
