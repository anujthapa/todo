import React from "react"

const list = ({ heading, desc }) => {
  return (
    <div className="list">
      <div className="list-heading">
        <h1>{heading}</h1>
      </div>
      <div className="list-desc">
        <li>{desc}</li>
      </div>
    </div>
  )
}
export default list
