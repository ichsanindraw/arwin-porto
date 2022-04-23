import * as React from "react"
import PropTypes from "prop-types"

// for handling external link
const Link = (
    {
        to,
        color,
        underline,
        bold,
        children
    }) => {

    let className = "test"

    if (bold) {
        className += " bold"
    }

    if (underline) {
        className += " underline"
    }

    return (
        <a
            className={className}
            href={to}
            style={{color}}
            target="_blank"
        >
            {children}
        </a>
    )
}

Link.propsType = {
    to: PropTypes.string,
    color: PropTypes.string,
    underline: PropTypes.bool,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Link