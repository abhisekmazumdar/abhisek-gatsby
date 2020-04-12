import React from "react"
import Img from "gatsby-image"
import "../sass/curriculumvitar.sass"

const CurriculumVitar = ( data ) => (
  <div className='curriculumvitar-wrapper'>
    <div className='content'>
      <div className='about-me'>
        <div className='display-pic'>
          <Img fluid={ data.cv.relationships.field_display_picture.relationships.thumbnail.localFile.childImageSharp.fluid } />
        </div>
        <div>
          <span className='lable'>About Me:</span>
          <div className='section-content' dangerouslySetInnerHTML={{ __html: data.cv.body.value }}></div>
        </div>
      </div>
      <div className='academics'>
        <span className='lable'>Academics:</span>
        <span className='section-content'>
          { data.cv.relationships.field_academics.map((academic, index) => {
            return <div key={index}>{ academic.field_name } @ { academic.field_college_school }</div>
          }) }
        </span>
      </div>
      <div className='current-designation'>
        <span className='lable'>Designation:</span>
        <p className='section-content'>{ data.cv.field_current_designation }</p>
      </div>
    </div>
  </div>
)

export default CurriculumVitar