import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress, addArticles, resetArticles } from '../state/actions';

export default function News (props){
    const [page, setPage] = useState(1);
    let pageSize = 20;
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [noOfPages, setNoOfPages] = useState(0);

    const { query } = useParams();

    let dispatch = useDispatch();
    let articles = useSelector(state => state.articlesReducer)
    
    // Capitalize title
    const capitalize = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }
    document.title = `${props.category==="general"?"":capitalize(props.category)+" - "}Kal Tak News`

    // Fetching news json from api
    const updateNews = async () => {
        dispatch(setProgress(10));
        let url;
        if (props.category==='search') {
            url = `${process.env.REACT_APP_BACKEND_URL}/search/${query}?page=${page}&pageSize=${pageSize}`
        } else {
            url = `${process.env.REACT_APP_BACKEND_URL}/category/${props.category}?page=${page}&pageSize=${pageSize}`
        }
        const data = await axios
            .get(url)
            .then((res) => {
                dispatch(setProgress(50));
                
                dispatch(addArticles(res.data.articles));

                setNoOfPages(Math.ceil(res.data.totalResults/pageSize));
                setTotalResults(res.data.totalResults);
                setLoading(false);
            });
            dispatch(setProgress(100));
        return data;
    }
    

    // Next data while scrolling
    const fetchMoreData = async () => {
        setPage(page+1);
    }
    
    useEffect(() => {
        updateNews();
    }, [page])

    useEffect(() => {
        setPage(1);
        dispatch(resetArticles());
    }, [query])
    
    return (
        <div>
            <div className="container" style={{marginTop:"60px"}}>
                <h2 className="py-4 text-light">{props.category==='general'?"Top Headlines":(props.category==="search"?capitalize(query):capitalize(props.category))} - Kal Tak News</h2>
                
            </div>
            
            {loading && <div className="container"> <div className="row"> <Loader /> </div> </div>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={page<=noOfPages?<div className="container"> <div className="row"> <Loader /> </div> </div>:""}
            >
                <div className="container">
                    <div className="row ">
                        {articles.map((e)=>{
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