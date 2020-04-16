import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ListBlogs from "../components/ListBlogs"

import "../sass/_blogs.sass"

const Blogs = ({ data }) => (
    <Layout>
      <SEO title="Archived Blogs"/>
      <div className="blog-listing-wrapper">
      {
        data.allNodeArticle.nodes.map((article, index) => {
          return <ListBlogs key={ index } article={ article } />
        })
      }
      </div>
    </Layout>
  )

  export const query = graphql`
  {
    allNodeArticle(sort: {fields: created, order: DESC}) {
      nodes {
        title
        created
        path {
          alias
        }
      }
    }
  }
`

  export default Blogs

