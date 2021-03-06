import React from "react"
import Img from "gatsby-image"

import "../../sass/_formattedbody.sass"

const FormattedBody = data => (
  <div className="block-wrapper">
    {data.block.field_title && (
      <span className="lable">{data.block.field_title}</span>
    )}
    {data.block.relationships &&
      data.block.relationships.field_sub_media &&
      data.block.field_media_position && (
        <div
          className={
            "block-media " + data.block.field_media_position.toLowerCase()
          }
        >
          <Img
            fluid={
              data.block.relationships.field_sub_media.relationships
                .field_media_image.localFile.childImageSharp.fluid
            }
          ></Img>
        </div>
      )}
    {data.block.field_body && (
      <span
        dangerouslySetInnerHTML={{ __html: data.block.field_body.processed }}
        className="block-content"
      ></span>
    )}
  </div>
)

export default FormattedBody
