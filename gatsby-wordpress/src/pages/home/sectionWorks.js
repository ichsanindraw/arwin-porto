import * as React from "react"
import Container from "../../components/layout/container"
import SelectedWorks from "./work/selectedWork"

const SectionWorks = () => {
    return (
        <section id="section-work">
            <Container>
                <h2 className="section-work__title">Selected Works</h2>
                <p className="section-work__text">Here are some of the projects I've worked on in the past, need an access? please hit me up on arwinwangsa@gmail.com</p>
                <SelectedWorks
                    title="Frictionless Shipping Address"
                    category="E-Commerce • Mobile App & Web • Launched"
                    taxonomy="Speed up filling address by maximizing automation on each label in order to increase success rate during checkout process"
                    link=""
                    thumbnail="../../../images/cover-project.png"
                />
            </Container>
        </section>
    )
}

export default SectionWorks