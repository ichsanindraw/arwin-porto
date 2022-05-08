import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import Navigation from "../../components/navigation"
import Container from "../../components/layout/container"
import BackToHome from "../../components/backToHome"
import Socmed from "../../components/socmed"

const About = () => {
    return (
        <Container>
            <Seo title="About Me"/>
            <Navigation isBackButton />
            <div className="about-me">
                <StaticImage
                    className="about-me__photo"
                    src="../../images/about-me.png"
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="about photo"
                />
                <div>
                    <h1>Hi, Arwin's Here!</h1>
                    <p>I’m product designer who believes in technology’s potential for good.</p>
                    <p>I love to help proffer solutions to real-time problems facing brands and businesses using my design and creative skills, because I derive joy from what I do.</p>
                    <p>Currently, I work at Tokopedia, helping Tokopedia’s mission to democratize commerce through technology. My daily job is building and contributing to our better UX apps.</p>
                    <p>My Interests: Design, Tech, Environmental Design, Music, History & Culture.</p>
                    <Socmed />
                </div>
            </div>
        </Container>
    )
}

export default About