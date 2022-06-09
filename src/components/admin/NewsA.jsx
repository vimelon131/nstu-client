import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/news';
import NewsList from './newsList/NewsList';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { syncNews, addNews } from '../../actions/news';
import { getKeyword } from '../../actions/news';
import Keywords from './newsList/Keywords';


const NewsA = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const keywords = useSelector(state => state.keywords.keywords);
    useEffect(() => {
        dispatch(getNews());
        dispatch(getKeyword());
    }, [news, keywords]);
    function syncNewsHandler() {
        dispatch(syncNews())
    }
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление новостями</p>
            <hr />
            <NewsList />
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncNewsHandler()} className="btn-action">Синхронизировать</button>
            <Keywords />
        </div>
    )
}

export default NewsA;