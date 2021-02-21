import React from "react"
import moment from "moment";


export default function Panel({Posts,setCurrentPost}) {

    return (
      <div  style={{margin:"1.25rem"}} onClick={ ()=>{setCurrentPost(Posts)}}>
          <div className="card">
          <div className="card-header">{Posts.title}</div>
       <p className="card-text">{moment(Posts.createdAt).subtract(6, "days").calendar()}</p> 
          </div>
      </div>
      
    )
  }