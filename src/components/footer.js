import React from "react"
import "../sass/footer.sass"

const Footer = () => (
  <footer>
    <div className='wapper'>
      <div className='content'>
          © Abhisek Mazumdar,
          <span className='footerYear'>{new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
)

export default Footer
