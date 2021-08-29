import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    articles = []
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            pageSize: 20,
            loading: true
        }
        document.title = `${this.props.category==="general"?"":this.capitalize(this.props.category)+" - "}Kal Tak News`
    }

    
    // Fetching news json from api
    async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fec771ee99234843b5e730a203cad834&page=${this.state.page}&pageSize=${this.state.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        await this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            noOfPages: Math.ceil(parsedData.totalResults/this.state.pageSize),
            loading:false
        })
        this.props.setProgress(100);
    }

    // Capitalize title
    capitalize = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }

    // Next data while scrolling
    fetchMoreData = async () => {
        await this.setState({
            page: this.state.page + 1
        });
        this.componentDidMount();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="py-4 text-light">{this.props.category==='general'?"Top Headlines":this.capitalize(this.props.category)} - Kal Tak News</h2>
                </div>
                {this.state.loading && <Loader/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.page<this.state.noOfPages?<Loader />:""}
                >
                    <div className="container">
                        <div className="row ">
                            {this.state.articles.map((e)=>{
                                return <div className="col-md-3 d-flex py-2">
                                    <NewsItem key={e.url} title={e.title} desc={e.description} imageURL={e.urlToImage} url={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
