import * as React from "react"
import Link from "./link"

const Socmed = () => {
    return (
        <div className="socmed">
            <Link className="socmed__email" to="mailto:arwinwangsa@gmail.com" target="_blank">Email</Link>
            <Link className="socmed__linkedin" to="https://www.linkedin.com/in/arwinwangsa/" target="_blank">LinkedIn</Link>
            <Link className="socmed__dribble" to="https://dribbble.com/arwinwangsa" target="_blank">Dribble</Link>
        </div>
    )
}

export default Socmed

