import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteKeyword } from '../../../actions/news';
import { Link } from 'react-router-dom';

const Keyword = ({keyword}) => {
    const dispatch = useDispatch();
    function deleteKeywordsHandler() {
        dispatch(deleteKeyword(keyword))
    }
    return (
        <div style={{maxWidth: "200px", display: "flex", justifyContent: "space-between"}} className='news__item'>
            <div className="news__date">{keyword.name}</div>
            <div className="news__manage">
            <button onClick={()=>deleteKeywordsHandler()} className="delete">X</button>
        </div>
    </div>
    )
}

export default Keyword;