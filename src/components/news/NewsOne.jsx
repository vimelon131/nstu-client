import React from 'react'
import { Link } from 'react-router-dom';

const NewsOne = ({news, styles}) => {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };
    return (
        <div style={styles} className='news-one'>
            <div className="news-title"><Link className="spec-link" to={`/news/${news._id}`}>{news.title}</Link></div>
            <div className="news-date">{news.date.toString().slice(0,10)}</div>
            <div className="news-categ">{news.category}</div>
        </div>
    )
}

export default NewsOne;