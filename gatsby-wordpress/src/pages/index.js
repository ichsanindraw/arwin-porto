import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionPersonal from "./home/sectionPersonal"
import SectionBlogs from "./home/sectionBlogs"
import SectionWorks from "./home/sectionWorks"
import Footer from "../components/footer"

const Home = ({ data }) => {
    return (
        <Layout>
            <Seo title="home" />
            <SectionPersonal />
            <SectionBlogs data={data} />
            <SectionWorks />
            <Footer />
        </Layout>
    )
}

export default Home

export const pageQuery = graphql`
    query {
        allWpPost(sort: { order: DESC, fields: [date] }, limit: 5) {
            nodes {
                title
                date
                slug
            }
        }
    }
`
