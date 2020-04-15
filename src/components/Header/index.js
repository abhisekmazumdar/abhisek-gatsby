import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../sass/_header.sass"

const Header = ({ siteTitle }) => (
  <header>
    <div className='content'>
      <div className='title'>
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
      <nav className='menu'>
        {/* Don't add more then 4 Links */}
        <Link to="/">About Me</Link>
        <Link to="/blogs/">Blogs</Link>
        <Link to="/">Gallery</Link>
        <Link to="/contact-me/">Get in Touch</Link>
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
