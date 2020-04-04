import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `black`,
      marginTop: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <div
        style={{
        color: `white`,
        margin: 0,
        }}
    >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
        href="https://www.gatsbyjs.org"
        style={{
            textDecoration: `none`,
        }}
        >
            Gatsby</a>
    </div>
    </div>
  </footer>
)

export default Footer
