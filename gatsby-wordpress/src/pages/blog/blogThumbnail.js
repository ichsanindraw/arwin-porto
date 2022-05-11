import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Link from "../../components/link"

const BlogThumbnail = ({ image, title, text, date, url }) => {
    return (
        <div className="blog-thumbnail">
            <StaticImage
                className="thumbnail__image"
                src="../../images/ex-blog1.png"
                quality={95}
                formats={["auto", "webp"]}
                alt="about photo"
            />
            <h3 className="thumbnail__title typography-3">{title}</h3>
            <div className="thumbnail__text">{text}</div>
            <div className="thumbnail__date">{date}</div>
            <Link to={url} className="thumbnail__link">Read Article</Link>
        </div>
    )
}

export default BlogThumbnail