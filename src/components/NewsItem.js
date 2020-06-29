import React from 'react';
import '../App.css';

export default function NewsItem(props) {
    const newsItem = props.newsItem;
    return (
             <div className="flex-item card mb-3">
                        <img className="card-img-top" src={newsItem.urlToImage} alt="News Item" style={{height:'200px'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{newsItem.title}</h5>
                            <p className="card-text">{newsItem.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
             </div>
    )
}
