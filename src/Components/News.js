import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';

export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20,
            loading: false
        }
    }

    
    // Fetching news json from api
    async componentDidMount(){
        console.log("waiting...");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fec771ee99234843b5e730a203cad834&page=${this.state.page}&pageSize=${this.state.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            noOfPages: Math.ceil(parsedData.totalResults/this.state.pageSize),
            loading: false
        })
    }

    // Capitalize title
    capitalize = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
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
                    <h2 className="py-4 text-light">{this.props.category==='general'?"Top Headlines":this.capitalize(this.props.category)} - Kal Tak News</h2>
                    {this.state.loading && <Loader />}
                    <div className="row ">                     
                        {!this.state.loading && this.state.articles.map((e)=>{
                            return <div className="col-md-3 d-flex py-2">
                                <NewsItem key={e.url} title={e.title} desc={e.description} imageURL={e.urlToImage} url={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="d-flex justify-content-between py-4">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page>=this.state.noOfPages} type="button" className="btn btn-success" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
