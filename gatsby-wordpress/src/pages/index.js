import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionPersonal from "./home/sectionPersonal"
import SectionBlogs from "./home/sectionBlogs"
import SectionWorks from "./home/sectionWorks"
import Footer from "../components/footer"

const Home = ({ blogs }) => {
  return (
    <Layout>
      <Seo title="home" />
      <SectionPersonal />
      <SectionBlogs data={blogs}/>
      <SectionWorks />
      <Footer />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        date
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