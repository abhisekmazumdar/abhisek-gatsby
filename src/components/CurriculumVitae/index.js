import React from "react"
import Img from "gatsby-image"
import FormattedBody from "../FormattedBody"
import "../../sass/_curriculumvitar.sass"

const CurriculumVitar = data => (
  <div className="curriculumvitar-wrapper">
    <div className="content">
      <div className="about-me">
        <div className="display-pic">
          <Img
            fixed={
              data.cv.relationships.field_display_picture.relationships
                .field_media_image.localFile.childImageSharp.fixed
            }
          />
        </div>
        <div className="bio">
          <span className="lable">About Me:</span>
          <div
            className="section-content"
            dangerouslySetInnerHTML={{ __html: data.cv.body.value }}
          ></div>
        </div>
      </div>
      {data.cv.relationships.field_all_in_one.map((data, index) => {
        return <FormattedBody key={index} block={data} />
      })}
    </div>
  </div>
)

export default CurriculumVitar
