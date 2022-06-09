import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { addNews } from '../../../actions/news';
import { Link } from 'react-router-dom';

const AddNews = () => {
    const dispatch = useDispatch();
    const errClass = ["error"];
    const [news, setNews] = useState({});
    function addNewsHandler() {
        dispatch(addNews(news));
    }
    

    return (
        <div className='news-edit'>
            <div className="edit__title">
                <label htmlFor="title">Заголовок</label>
                <input onChange={event => setNews({...news, title: event.target.value})} id="title" type="text" />
            </div>
            <div className="edit__date">
                <label htmlFor="date">Дата</label>
                <input id="date" type="date" onChange={event => setNews({...news, date: event.target.value})}/>
            </div>
            <div className="edit__category">
                <label htmlFor="categ">Категория</label>
                <input id="categ" type="text" onChange={event => setNews({...news, category: event.target.value})} />
            </div>
            <div className="edit__content">
                <label htmlFor="content">Содержание</label>
                <textarea name="content" id="content" cols="70" rows="20" onChange={event => setNews({...news, content: event.target.value})} ></textarea>
            </div>
            <div className="error">Все поля должны быть заполнены!</div>
            <button onClick={() => addNewsHandler()} className="btn-action">Сохранить</button>
            <Link to={"../news"}> <button className="btn-neutral">Назад</button> </Link>
            
        </div>
    )
}

export default AddNews;