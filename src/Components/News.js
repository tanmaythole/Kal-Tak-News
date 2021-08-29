import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20
        }
    }

    
    // Fetching news json from api
    async componentDidMount(){
        console.log("waiting...");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fec771ee99234843b5e730a203cad834&page=${this.state.page}&pageSize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            noOfPages: Math.ceil(parsedData.totalResults/this.state.pageSize)
        })
    }

    // Handle Previoue button
    handlePrev = async () => {
        await this.setState({
            page: this.state.page - 1,
        });
        this.componentDidMount();
    }

    // Handle Next Button
    handleNext = async () => {
        await this.setState({
            page: this.state.page + 1,
        });
        this.componentDidMount();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>Top Headlines</h2>
                    <div className="row">                     
                        {this.state.articles.map((e)=>{
                            return <div className="col-md-3">
                                <NewsItem key={e.url} title={e.title} desc={e.description} imageURL={e.urlToImage} url={e.url} />
                            </div>
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page>=this.state.noOfPages} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
