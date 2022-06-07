import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNews } from '../../actions/news.js';
import NewsOne from './NewsOne.jsx';
import "./news.css"
import { Outlet } from 'react-router-dom';

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const colors = ["rgba(147, 48, 79, 0.7)", "rgba(253, 73, 79, 0.7)", "rgba(41, 156, 126, 0.7)", "rgba(44, 147, 191, 0.7)", "rgba(227, 149, 23, 0.7)"];
    const size = ["49%", "49%", "32%", "32%", "32%", "69%", "29%", "49%", "49%"]
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }
    useEffect(() => {
        if (news.length == 0)
            dispatch(getNews());
    });
    return (
        <div className='container-main'>
            <div className="content">
                <p className='page__title'>Новости</p>
                <Outlet/>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z8WVfsyhDhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="news_content">
                    {news.map((el, i) => {
                        let img;
                        if (el.images) {
                            img = "https://www.nstu.ru/" + el.images[0];
                        }
                        return <NewsOne key={el._id} news={el} styles={{width: size[i%10], background: `linear-gradient(112deg,${colors[getRandom(0,4)]},${colors[getRandom(0,4)]}), url(${img}) no-repeat`}} />
                    })}
                    
                </div>
            </div>
            
        </div>
    )
}

export default News;