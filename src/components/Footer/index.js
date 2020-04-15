import React from "react"
import "../../sass/_footer.sass"

const Footer = () => (
  <footer>
    <div className='wrapper'>
      <div className='content'>
        <nav className='menu'>
          {/* Don't add more then 4 Links */}
          <a href="https://twitter.com/abhisekmajumdar" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/abhisekmazumdar/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.drupal.org/u/abhisekmazumdar" target="_blank" rel="noopener noreferrer">Drupal</a>
        </nav>
      </div>
    </div>
  </footer>
)

export default Footer
