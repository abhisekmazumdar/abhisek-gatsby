import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../sass/header.sass"

const Header = ({ siteTitle }) => (
  <header>
    <div className='content'>
      <span className='left'>
        <Link to="/">
              {siteTitle}
        </Link>
      </span>
      <span className='right'>
        <Link to="#">Link 1</Link>
        <Link to="#">Link 2</Link>
      </span>
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
