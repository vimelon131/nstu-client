import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { updateNews } from '../../../actions/news';
import { Link } from 'react-router-dom';

const EditNews = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const newsID = useSelector(state => state.news.news).filter(el => el._id === params.newsID)[0];
    console.log(newsID)
    const [news, setNews] = useState(newsID);
    function updateNewsHandler() {
        dispatch(updateNews(news));
    }

    return (
        <div className='news-edit'>
            <p className='page__title'>Редактирование новости</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">Заголовок</label>
                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setNews({...news, title: event.target.value})} id="title" type="text" value={news.title}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Дата</label>
                <input style={{fontSize: "18px"}} id="date" type="date" onChange={event => setNews({...news, date: event.target.value})} value={news.date.toString().slice(0,10)}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Категория</label>
                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setNews({...news, category: event.target.value})} value={news.category}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Содержание</label>
                <textarea style={{fontSize: "18px"}} name="content" id="content" cols="70" rows="20" onChange={event => setNews({...news, content: event.target.value})} value={news.content}></textarea>
            </div>
            <button onClick={() => updateNewsHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../news"}> Назад</Link></button> 
        </div>
    )
}

export default EditNews;