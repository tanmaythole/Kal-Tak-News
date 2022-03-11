import React from 'react'

export default function NewsItem({title, desc, imageURL, url, author, date, source}) {
    return (
        <div>
            <div className="card border-0" style={{height:"100%"}}>
                <img src={imageURL?imageURL:"/logo.png"} className="card-img-top" style={!imageURL?{background:"black", padding:"50px 20px"}:{height: "174px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <span className="position-absolute top-0 px-2 bg-danger badge rounded text-light" style={{right:"0%", fontSize:"12px", zIndex:"1"}}>
                        <span>{source?source:"KalTakNews"}</span>
                    </span>
                    <p className="card-text">{desc?desc.slice(0, 100):""}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
                    <a href={url} className="btn btn-success">Read More</a>
                </div>
            </div>
        </div>
    )
}
