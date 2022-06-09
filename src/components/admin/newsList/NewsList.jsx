import React from 'react'
import "./newsList.css"
import News from './News'
import { useSelector } from 'react-redux'

const NewsList = () => {
    const news = useSelector(state => state.news.news).map(news => <News key={news._id} news={news}/>)
    return (
        <div className='news-list'>
            <div className="news-list__header">
                <div className="news-list__date">Дата</div>
                <div className="news-list__title">Заголовок</div>
                <div className="news-list__category">Категория</div>
                <div className="news-list__manage">Управление</div>
            </div>
            {news}
        </div>
    )
}

export default NewsList;