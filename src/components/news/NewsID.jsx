import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNews } from '../../actions/news.js';
import parse from 'html-react-parser'

const NewsID = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news).filter(el => el._id === params.newsID)[0];
    
    return (
        <div className='container-main'>
            <div className="content">
                <p style={{fontWeight: "500"}}>{news.category}, {news.date.toString().slice(0,10)}</p>
                <p className='page__title'>{news.title}</p>
                
                <p className="news-content">
                {parse(news.content).slice(1)}
                </p>
            
            </div>
            
        </div>
    )
}

export default NewsID;