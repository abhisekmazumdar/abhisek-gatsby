import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CurriculumVitar from "../components/CurriculumVitae"
import ListBlogs from "../components/ListBlogs"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
      data.allNodeCurriculumVitae.nodes.map((data, index) => {
        return <CurriculumVitar key={ index } cv={ data } />
      })
    }
    {
      data.allNodeArticle.nodes.map((article, index) => {
        return <ListBlogs key={ index } article={ article } />
    })
    }

  </Layout>
)
export const query = graphql`
  {
    allNodeCurriculumVitae {
      nodes {
        body {
          value
        }
        id
        field_current_designation
        relationships {
          field_display_picture {
            relationships {
              thumbnail {
                localFile {
                  publicURL
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          field_academics {
            id
            field_name
            field_college_school
            field_years
          }
        }
        title
      }
    }
    allNodeArticle(limit: 5, sort: {fields: [title, changed], order: [DESC, ASC]}) {
      nodes {
        body {
          summary
        }
        relationships {
          field_tags {
            name
          }
          field_image {
            localFile {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        changed
        path {
          alias
        }
        title
      }
    }
  }
`

export default IndexPage
