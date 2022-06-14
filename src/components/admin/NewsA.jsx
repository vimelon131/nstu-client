import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/news';
import NewsList from './newsList/NewsList';
import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { syncNews, addNews } from '../../actions/news';
import { getKeyword } from '../../actions/news';
import Keywords from './newsList/Keywords';
import { Oval } from 'react-loader-spinner';



const NewsA = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const keywords = useSelector(state => state.keywords.keywords);
    const isFetching = useSelector(state => state.news.isFetching);
    useEffect(() => {
        dispatch(getNews());
        dispatch(getKeyword());
    }, []);

    function syncNewsHandler() {
        dispatch(syncNews());
    }
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление новостями</p>
            <hr />
            {
                isFetching === false ? 
                <NewsList key={"1"} news={news}/> : 
                <div className="news-list"><Oval/></div> 
            }
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncNewsHandler()} className="btn-action">Синхронизировать</button>
            <Keywords keywords={keywords}/>
            <Link to={"addKeyword"}> <button className="btn-action">Добавить</button></Link>
        </div>
    )
}

export default NewsA;