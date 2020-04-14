import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
       <SEO title={ data.allNodeArticle.nodes[0].title } />
      <div>Hello blog post</div>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    allNodeArticle(filter: {path: {alias: {eq: $pagePath}}}) {
      nodes {
        title
        path {
          alias
        }
      }
    }
  }
`