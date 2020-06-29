import React from 'react';
import NewsItem from './NewsItem';
import '../App.css';

export default function NewsFeeds(props) {
    const news = props.news; 
    console.log('News are',news );
    return (
        <div className="news-container container">
            {news.map( (item,index) => {
                return(
                    <React.Fragment key={index}>
                        <NewsItem newsItem={item} />
                    </React.Fragment>    
                )
            })}
        </div>
    )
}
