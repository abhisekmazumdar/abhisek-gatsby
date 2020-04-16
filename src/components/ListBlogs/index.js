import React from "react"
import { Link } from "gatsby"
import "../../sass/_listblogs.sass"

const ListBlogs = ( data ) => (
  <div className='list-blogs-wrapper'>
    <Link to={ "/blog" + data.article.path.alias } >{ data.article.title }</Link>
    <span className="blogs-date">{ new Date(data.article.created).toString().slice(0, 15) }</span>
  </div>
)

export default ListBlogs