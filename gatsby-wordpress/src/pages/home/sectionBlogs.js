import * as React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Container from  "../../components/layout/container"

const SectionBlogs = ({ data }) => {
    console.log(data);
    console.log(JSON.stringify(data, null, 4));

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
                        <h1>Personal Thoughts</h1>
                        <p>My random thoughts, write about what I've been working on, problems I've solved, and things I'm still trying to figure out.</p>
                    </div>
                    <div>
                        {/* {data.allWpPost.nodes.map((node) => {
                            <div key={node.slug}>
                                <h4>{node.title}</h4>
                                <p>31 March 2022</p>
                            </div>
                        })} */}
                       
                        <div>
                            <h4>Is your daily job really affect your daily life?</h4>
                            <p>31 March 2022</p>
                        </div>
                        <div>
                            <h4>Is your daily job really affect your daily life?</h4>
                            <p>31 March 2022</p>
                        </div>
                        <div>
                            <h4>Is your daily job really affect your daily life?</h4>
                            <p>31 March 2022</p>
                        </div>
                        <div>
                            <h4>Is your daily job really affect your daily life?</h4>
                            <p>31 March 2022</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionBlogs

export const query = graphql`
  {
    allWpPost(sort: {fields: [date]}) {
      nodes {
        title
      }
    }
  }
`