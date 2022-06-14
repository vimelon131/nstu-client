import React from 'react'
import News from './News'
import "./newsList.css"

const NewsList = ({news}) => {
    return (
        <div className='news-list'>
            <div className="news-list__header">
                <div className="news-list__date">Дата</div>
                <div className="news-list__title">Заголовок</div>
                <div className="news-list__category">Категория</div>
                <div className="news-list__manage">Управление</div>
            </div>
            {news.map(news => <News key={news._id} news={news}/>)}
        </div>
    )
}

export default NewsList;