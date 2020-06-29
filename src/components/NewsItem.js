import React from 'react';
import '../App.css';
import Moment from 'moment';
import logo from '../logo.svg'

export default function NewsItem(props) {
    const newsItem = props.newsItem;

    function gotoNewsArticle() {
        let win = window.open(newsItem.url, '_blank');
        win.focus();
    }

    return (
             <div className="flex-item card mb-3" onClick={gotoNewsArticle}>
                        {/* <img className="card-img-top" src={newsItem.urlToImage} alt="News Item" style={{height:'200px'}}/> */}
                        <img className="card-img-top" src={newsItem.image ? newsItem.image : logo} alt="News Item" style={{height:'200px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{newsItem.title}</h5>
                            <p className="card-text">{newsItem.description}</p>
                            <p className="card-text">
                                <small className="text-muted">Published on {Moment( newsItem.publishedAt).format('MMMM Do YYYY')}</small><br/>
                                <small className="text-muted">{newsItem.source.name}</small>
                            </p>
                        </div>
             </div>
    )
}
