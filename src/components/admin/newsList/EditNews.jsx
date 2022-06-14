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
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Заголовок</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setNews({...news, title: event.target.value})} id="title" type="text" value={news.title}/></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"><label className='field__label' htmlFor="date">Дата</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px"}} id="date" type="date" onChange={event => setNews({...news, date: event.target.value})} value={news.date.toString().slice(0,10)}/></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"><label className='field__label' htmlFor="categ">Категория</label></div>  
                <div className="form__field__value"><input className='field__input' id="categ" type="text" onChange={event => setNews({...news, category: event.target.value})} value={news.category}/></div>
            </div>
            <div className="graduate__info_field">
                <div className="form__field__name"> <label className='field__label' htmlFor="content">Содержание</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content" cols="70" rows="20" value={news.content} onChange={event => setNews({...news, content: event.target.value})} ></textarea></div>
            </div>
            <button onClick={() => updateNewsHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../news"}> Назад</Link></button> 
        </div>
    )
}

export default EditNews;