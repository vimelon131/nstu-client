import React from 'react'
import { useSelector } from 'react-redux'
import Keyword from "./Keyword"
import { Link } from 'react-router-dom';

const Keywords = () => {
    const keywords = useSelector(state => state.keywords.keywords).map(keyword => <Keyword key={keyword._id} keyword={keyword}/>);
    return (
        <div className='news-list'>
            <div className="news-list__header">
                <div className="news-list__date">Ключевое слово</div>
            </div>
            {keywords}
            <Link to={"addKeyword"}> <button className="btn-action">Добавить</button></Link>
        </div>
    )
}

export default Keywords;