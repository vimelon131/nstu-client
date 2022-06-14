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
        if (!news.title || !news.date || !news.category || !news.content) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(addNews(news));
            alert('Новость добавлена');
        } 
    }

    return (
        <div className='news-edit'>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Заголовок</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setNews({...news, title: event.target.value})} id="title" type="text" /></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"><label className='field__label' htmlFor="date">Дата</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px"}} id="date" type="date" onChange={event => setNews({...news, date: event.target.value})}/></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"><label className='field__label' htmlFor="categ">Категория</label></div>  
                <div className="form__field__value"><input className='field__input' id="categ" type="text" onChange={event => setNews({...news, category: event.target.value})} /></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"> <label className='field__label' htmlFor="content">Содержание</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content" cols="70" rows="20" onChange={event => setNews({...news, content: event.target.value})} ></textarea></div>
            </div>
            <div className="error">Все поля должны быть заполнены!</div>
            <button onClick={() => addNewsHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../news"}> Назад</Link></button> 
            
        </div>
    )
}

export default AddNews;