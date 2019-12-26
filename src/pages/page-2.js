import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <pre>{JSON.stringify(data, null, 4)}</pre>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  {
    allNodePage {
      nodes {
        title
      }
    }
  }
`

export default SecondPage
