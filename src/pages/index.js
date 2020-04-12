import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CurriculumVitar from "../components/CurriculumVitae"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    { data.allNodeCurriculumVitae.nodes.map(function(item){
      return <CurriculumVitar key={ item.id } cv={ item } />
    }) }
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
  }
`

export default IndexPage
