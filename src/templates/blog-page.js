import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import "../sass/_blogpage.sass"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.allNodeArticle.nodes[0].title} />
      <div className="blog-wrapper">
        <div className="metadata">
          <div className="lable">{data.allNodeArticle.nodes[0].title}</div>
          <div className="created">
            {new Date(data.allNodeArticle.nodes[0].created)
              .toString()
              .slice(0, 15)}
          </div>
        </div>
        <div className="tags">
          {data.allNodeArticle.nodes[0].relationships.field_tags.map(
            (tag, index) => {
              return <span key={index}>{tag.name}</span>
            }
          )}
        </div>
        <div className="blog-image">
          {data.allNodeArticle.nodes[0].relationships.field_image.localFile
            .childImageSharp ? (
            <Img
              fluid={
                data.allNodeArticle.nodes[0].relationships.field_image.localFile
                  .childImageSharp.fluid
              }
            ></Img>
          ) : (
            ""
          )}
        </div>
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{
            __html: data.allNodeArticle.nodes[0].body.processed,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    allNodeArticle(
      filter: { path: { alias: { eq: $pagePath } }, status: { eq: true } }
    ) {
      nodes {
        body {
          processed
        }
        created
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          field_tags {
            name
          }
        }
        title
        status
      }
    }
  }
`
