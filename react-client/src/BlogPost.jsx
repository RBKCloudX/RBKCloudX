import React from 'react'

export default function BlogPost({Post}) {
    return (
        <div className="blog">
            <h2 className="ui header">
            <img src="https://bookingagentinfo.com/wp-content/uploads/2018/05/Nargis-Fakhri-Contact-Information.jpg" className="ui circular image"/>
            Author
             <div className="info-line">{Post.createAt}</div>
            </h2>
            <h1>{Post.title}</h1>
            <div>{Post.body}</div>
        </div>
    )
}
