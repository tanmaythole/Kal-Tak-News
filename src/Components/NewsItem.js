import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageURL, url} = this.props;
        return (
            <div>
                <div className="card" style={{width: '90%'}}>
                    <img src={imageURL?imageURL:"/logo.png"} className="card-img-top" style={!imageURL?{background:"black", padding:"50px 20px"}:{}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 70)}...</h5>
                        <p className="card-text">{desc?desc.slice(0, 100):""}...</p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
