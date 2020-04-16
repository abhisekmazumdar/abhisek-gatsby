import React from "react"
import Img from "gatsby-image"
import "../../sass/_curriculumvitar.sass"

const CurriculumVitar = ( data ) => (
  <div className='curriculumvitar-wrapper'>
    <div className='content'>
      <div className='about-me'>
        <div className='display-pic'>
          <Img fixed={ data.cv.relationships.field_display_picture.relationships.field_media_image.localFile.childImageSharp.fixed } />
        </div>
        <div className='bio'>
          <span className='lable'>About Me:</span>
          <div className='section-content' dangerouslySetInnerHTML={{ __html: data.cv.body.value }}></div>
        </div>
      </div>
      <div className='current-designation'>
        <span className='lable'>Work@</span>
        <p className='section-content'>Currently, I'm working as a <b>{ data.cv.field_current_designation }</b>.</p>
      </div>
      <div className='academics'>
        <span className='lable'>Studied@</span>
        <span className='section-content'>
          <p>I did my post-graduation on <b>{ data.cv.relationships.field_academics[0].field_name }</b> from <b>{ data.cv.relationships.field_academics[0].field_college_school }</b>.
           And also have a degree in <b>{ data.cv.relationships.field_academics[1].field_name }</b> from <b>{ data.cv.relationships.field_academics[1].field_college_school }</b>.</p>
        </span>
      </div>
    </div>
  </div>
)

export default CurriculumVitar