import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SelectedWork = ({ title, category, taxonomy, link, thumbnail }) => {
    return (
        <div className="selected-work">
            <div className="selected-work__text">
                <h2>{title}</h2>
                <h5 className="blog-category">{category}</h5>
                <p>{taxonomy}</p>
                <a className="btn" href={link}>View Project</a>
            </div>
            <div className="selected-work__thumbnail">
                <StaticImage
                    src="../../../images/cover-project.png"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="cover-project"
                />
            </div>
        </div>
    )
}

export default SelectedWork