import React from "react"

const FormattedBody = data => (
  <div className="block">
    <span className="lable">{data.block.field_title}</span>
    <div
      className="section-content"
      dangerouslySetInnerHTML={{ __html: data.block.field_body.processed }}
    ></div>
    {console.log(data.block)}
  </div>
)

export default FormattedBody
