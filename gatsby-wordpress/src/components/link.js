import * as React from "react"
// import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link

// for handling external link
// const Link = (
//     {
//         to,
//         color,
//         underline,
//         bold,
//         children
//     }) => {

//     let className = "test"

//     if (bold) {
//         className += " bold"
//     }

//     if (underline) {
//         className += " underline"
//     }

//     return (
//         <a
//             className={className}
//             href={to}
//             style={{color}}
//             target="_blank"
//             rel="noreferrer"
//         >
//             {children}
//         </a>
//     )
// }

// Link.propsType = {
//     to: PropTypes.string,
//     color: PropTypes.string,
//     underline: PropTypes.bool,
//     bold: PropTypes.bool,
//     children: PropTypes.node.isRequired
// }

// export default Link