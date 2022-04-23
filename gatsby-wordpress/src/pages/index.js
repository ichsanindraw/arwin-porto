import * as React from "react"
// import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Container from "../components/layout/container"
import Link from '../components/link'
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <section id="section-personal">
          <StaticImage
            class="home-rect home-rect1"
            src="../images/rectangle-1.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="rectangle 1"
          />
          <StaticImage
            class="home-rect home-rect2"
            src="../images/rectangle-2.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="rectangle 2"
          />
  
        <Container>
          <StaticImage
            src="../images/photo.png"
            width={114}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Arwin's Picture"
          />

          <h2>Hi, I’m Arwin. I’m currently a Product Designer at <Link to="https://www.tokopedia.com">Tokopedia</Link> (Indonesia’s largest e-commerce). Helping Tokopedia’s mission to democratize commerce through technology.</h2>
          <p>Believes in technology’s potential for good & make beautiful things that works.<br/><br/>
          Previously, I worked at <Link to="https://www.bridestory.com/" underline bold>Bridestory</Link> and <Link to="https://aleph-labs.com/" underline bold>Aleph-Labs.</Link></p>

          <StaticImage
            src="../images/arrow-down.png"
            width={48}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="scroll down"
          />
        </Container>
      
      </section>
      
      {/* <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))} */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//       <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
//       <Link to="/using-dsg">Go to "Using DSG"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage