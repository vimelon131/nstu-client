import React from 'react'
import { Link } from 'react-router-dom';
import { deleteNews, getNews } from '../../../actions/news';
import { useDispatch } from 'react-redux';

const News = ({news}) => {
    const dispatch = useDispatch();
    function deleteNewsHandler() {
        dispatch(deleteNews(news))
    }
    return (
        <div className='news__item'>
            <div className="news__date">{news.date.toString().slice(0,10)}</div>
            <div className="news__title">{news.title}</div>
            <div className="news__category">{news.category}</div>
            <div className="news__manage">
                <Link to={`edit/${news._id}`}>Редактировать</Link>
                <button onClick={()=>deleteNewsHandler()} className="delete">X</button>
            </div>
        </div>
    )
}

export default News;