import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../../sass/_listblogs.sass"

const ListBlogs = ( data ) => (
  <div className='list-blogs-wrapper'>
    <Link to={ "/blog" + data.article.path.alias } >{ data.article.title }</Link>
    <div className='content'>
      <div className='section-content'>
        <p>{ data.article.body.summary }</p>
      </div>
      {(data.article.relationships && data.article.relationships.field_image.localFile.childImageSharp)
        ?
          <Img fixed={ data.article.relationships.field_image.localFile.childImageSharp.fixed } />
        :
          <div></div>
      }
    </div>
  </div>
)

export default ListBlogs