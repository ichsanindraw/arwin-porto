import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Link from "../../components/link"

import Seo from "../../components/seo"
import Navigation from "../../components/navigation"
import Container from "../../components/layout/container"
import BlogThumbnail from "./blogThumbnail"

const Blog = () => {
    return (
        <Container>
            <Seo title="Blog"/>
            <Navigation isBackButton />
            <div className="blog-thumbnail newest-blog">
                <StaticImage
                    className="thumbnail__image"
                    src="../../images/ex-blog1.png"
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="about photo"
                />
                <label>New Article</label>
                <h1 className="thumbnail__title">Why designing a portfolio is important for designers?</h1>
                <div className="thumbnail__text">Don't underestimate the power of designing your own portfolio. Your portfolio shows who you are</div>
                <div className="thumbnail__date">February 4, 2022</div>
                <Link to="/" className="thumbnail__link">Read Article</Link>
            </div>
            <div className="all-articles">
                <h2 className="title-section">All Articles</h2>

                <div className="all-articles__container">
                    <BlogThumbnail
                        image="../../../images/ex-blog1.png"
                        title="6 questions I have or wished I'd asked of my future coworkers & leader"
                        text="Take this opportunity to find out your next job under the company"
                        date="January 30, 2022"
                        url="/"
                    />

                    <BlogThumbnail
                        image="../../images/ex-blog1.png"
                        title="Align your direction by using a principle"
                        text="Make everyone go in the same direction and achieve your team goal together"
                        date="January 20, 2022"
                        url="/"
                    />

                    <BlogThumbnail
                        image="../../images/ex-blog1.png"
                        title="Fear is always only in our mind"
                        text="My way to avoid overthinking before doing a presentation"
                        date="January 13, 2022"
                        url="/"
                    />
                </div>

                <div className="all-articles__link">
                    <Link to="/" className="btn btn--large">See all articles</Link>
                </div>
            </div>
        </Container>
    )
}

export default Blog