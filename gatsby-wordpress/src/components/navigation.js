import * as React from "react"
import { Link } from "gatsby"
import Container from "./layout/container"

 const Navigation = () => {
    return (
        <Container>
            <nav>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </nav>
        </Container>
    )
}

export default Navigation