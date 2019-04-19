import React from "react"
import List from "./list"
import { data } from "./data"
import "./memo.scss"
const Memo = () => {
  return (
    <div className="memo">
      {data.map(item => (
        <List heading={item.day} desc={item.desc} />
      ))}
    </div>
  )
}
export default Memo
