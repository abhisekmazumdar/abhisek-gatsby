import React from "react"
import { Link } from "gatsby"
import "../sass/listblogs.sass"

const ListBlogs = ( article ) => (
  <div className='list-blogs-wrapper'>
    { console.log("article", article)}
       <div className='content'>
      {/* <Img fluid={ data.article.relationships.field_image.localFile.childImageSharp.fluid } /> */}
      <Link to={ article.article.path.alias } >{ article.article.title }</Link>
      {/* <div className='section-content' dangerouslySetInnerHTML={{ __html: article.article.body.summary }}></div> */}
    </div>
  </div>
)

export default ListBlogs