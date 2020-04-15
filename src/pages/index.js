import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CurriculumVitar from "../components/CurriculumVitae"
import ListBlogs from "../components/ListBlogs"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className='curriculumvitae-block'>
    {
      data.allNodeCurriculumVitae.nodes.map((data, index) => {
        return <CurriculumVitar key={ index } cv={ data } />
      })
    }
    </div>
    <div className='recent-blogs-block'>
      <span className='lable'>#Blogs</span>
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
              field_media_image {
                localFile {
                  childImageSharp {
                    fixed(width: 200, height: 200) {
                      ...GatsbyImageSharpFixed
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
    allNodeArticle(limit: 10, sort: {fields: [title, changed], order: [DESC, ASC]}) {
      nodes {
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
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
