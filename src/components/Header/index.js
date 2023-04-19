import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../sass/_header.sass"

const Header = ({ siteTitle }) => (
  <header>
    <div className="content">
      <div className="title">
        <Link to="/">{siteTitle}</Link>
      </div>
      <nav className="menu">
        {/* Don't add more then 4 Links */}
        <Link to="/blogs/">Blogs</Link>
        <a
          href="https://abhisekmazumdar.notion.site/Abhisek-Mazumdar-f624928ce0fa4b48900097a7c6703de9"
          target="_blank"
        >
          Resume
        </a>
        <Link to="/photos/">Photos</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
