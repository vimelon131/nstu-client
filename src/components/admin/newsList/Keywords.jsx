import React from 'react'
import Keyword from "./Keyword"
import { Link } from 'react-router-dom';

const Keywords = ({keywords}) => {
    return (
        <div s className='news-list'>
            <div className="news-list__header">
                <div className="news-list__date">Ключевые слова</div>
            </div>
            {keywords.map(keyword => <Keyword key={keyword._id} keyword={keyword}/>)}
            
        </div>
    )
}

export default Keywords;