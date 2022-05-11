import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Container from  "../../components/layout/container"
import Link from "../../components/link"

const SectionPersonal = () => {
    return (
        <section id="section-personal">
          <StaticImage
            className="home-rect home-rect1"
            src="../../images/rectangle-1.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="rectangle_1"
          />
          <StaticImage
            className="home-rect home-rect2"
            src="../../images/rectangle-2.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="rectangle_2"
          />
  
        <Container>
          <StaticImage
            src="../../images/photo.png"
            width={114}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Arwin's_Picture"
          />

          <h2>Hi, I’m Arwin. I’m currently a Product Designer at <Link to="https://www.tokopedia.com">Tokopedia</Link> (Indonesia’s largest e-commerce). Helping Tokopedia’s mission to democratize commerce through technology.</h2>
          <p>Believes in technology’s potential for good & make beautiful things that works.<br/><br/>
          Previously, I worked at <Link to="https://www.bridestory.com/" underline bold>Bridestory</Link> and <Link to="https://aleph-labs.com/" underline bold>Aleph-Labs.</Link></p>

          <StaticImage
            src="../../images/arrow-down.png"
            width={48}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="scroll down"
          />
        </Container>
      
      </section>
    )
}

export default SectionPersonal