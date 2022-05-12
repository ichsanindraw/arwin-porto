import * as React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../../components/link"

const BlogThumbnail = ({ image, title, text, date, link }) => {
  const dataImage = getImage(image)

  return (
    <div className="blog-thumbnail">
      {dataImage != undefined ? (
        <GatsbyImage
          className="thumbnail__image thumbnail__image--mini"
          image={dataImage}
          alt="about photo"
        />
      ) : (
        <StaticImage
          className="thumbnail__image thumbnail__image--mini"
          src="../../images/img-not-found.png"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="image not found"
        />
      )}
      <h3 className="thumbnail__title typography-3">{title}</h3>
      <div
        className="thumbnail__text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="thumbnail__date">{date}</div>
      <Link to={link} className="thumbnail__link">
        Read Article
      </Link>
    </div>
  )
}

export default BlogThumbnail
