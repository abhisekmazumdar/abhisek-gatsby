import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MyCv = ({ data }) => (
    <Layout>
      <SEO title="My Self" />
      <div>{ console.log("data :",data) }</div>
      <div>
        { data.allNodeCurriculumVitae.nodes.map(({ node }) => (
          console.log("node :",node)
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

  export const query = graphql`
  {
    allNodeCurriculumVitae {
      nodes {
        body {
          processed
        }
        field_current_designation
        relationships {
          field_academics {
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

  export default MyCv

