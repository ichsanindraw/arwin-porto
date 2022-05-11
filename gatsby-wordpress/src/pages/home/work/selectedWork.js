import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const SelectedWork = ({ title, category, taxonomy, link, thumbnail }) => {
    return (
        <div className="selected-work">
            <div className="selected-work__text">
                <h2 className="selected-work__title">{title}</h2>
                <span className="selected-work__category">{category}</span>
                <p className="selected-work__desc">{taxonomy}</p>
                <Link to={link} className="btn btn--medium btn--transparent-black">View Project</Link>
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