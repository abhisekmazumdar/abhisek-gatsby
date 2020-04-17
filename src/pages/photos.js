import React from "react"
import { graphql } from 'gatsby'

import "../sass/_photos.sass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoGallery from "../components/PhotoGallery"

const Photos = ( data ) => (
    <Layout>
      <SEO title="Photos"/>
      <div className="photos-wrapper">
        <PhotoGallery ></PhotoGallery>
      </div>
    </Layout>
  )

  export const query = graphql`
  {
    allMediaImage {
      nodes {
        field_media_image {
          alt
        }
        name
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                fixed {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`

  export default Photos

