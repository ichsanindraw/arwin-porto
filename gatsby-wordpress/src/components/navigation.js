import * as React from "react"
import { Link } from "gatsby"
import Container from "./layout/container"

 const Navigation = ({ isBackButton }) => {
    return (
        <Container>
            <nav>
                {isBackButton ? <Link className="backHome" to="/">← Back to Homepage</Link> : null}
                <div className="main-navigation">
                    <Link to="/page-2/">Blog</Link>
                    <Link to="/about/">About</Link>
                </div>
            </nav>
        </Container>
    )
}

export default Navigation