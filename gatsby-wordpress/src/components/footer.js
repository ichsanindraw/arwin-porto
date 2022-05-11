import * as React from "react"
import Container from  "../components/layout/container"
import Socmed from "./socmed"

const Footer = () => {
    return (
        <Container>
            <footer>
                <h3 className="footer-title">Thanks for visiting! Feel free to connect with me.</h3>
                <Socmed />
                <div className="copyright">© 2021 Arwin Wangsa. Last update: Nov 2020.</div>
            </footer>
        </Container>
    )
}

export default Footer