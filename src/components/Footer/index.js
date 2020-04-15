import React from "react"
import "../../sass/_footer.sass"

const Footer = () => (
  <footer>
    <div className='wrapper'>
      <div className='content'>
          © Abhisek Mazumdar,
          <span className='footerYear'>{new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
)

export default Footer
