import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import FormattedBody from "../components/FormattedBody"

import "../sass/_blogpage.sass"

export default ({ data }) => {
  const image = data.allNodeArticle.nodes[0].relationships.field_image
    ? data.allNodeArticle.nodes[0].relationships.field_image.relationships
        .field_media_image.localFile.childImageSharp.fluid
    : null
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Layout>
      <SEO
        title={data.allNodeArticle.nodes[0].title}
        description={data.allNodeArticle.nodes[0].body.summary}
        image={image}
        canonical={url}
      />
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
          {image ? <Img fluid={image}></Img> : ""}
        </div>
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{
            __html: data.allNodeArticle.nodes[0].body.processed,
          }}
        ></div>
        {data.allNodeArticle.nodes[0].relationships.field_all_in_one.map(
          (data, index) => {
            return <FormattedBody key={index} block={data} />
          }
        )}
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
          summary
        }
        created
        relationships {
          field_tags {
            name
          }
          field_all_in_one {
            field_title
            field_body {
              processed
            }
            field_media_position
            relationships {
              field_sub_media {
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          field_image {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        title
        status
      }
    }
  }
`
