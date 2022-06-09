import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addKeyword } from '../../../actions/news';
import { Link } from 'react-router-dom';

const AddKeyword = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    function addKeywordHandler() {
        dispatch(addKeyword(keyword));
    }
    return (
        <div>
            <div className='news-edit'>
                <div className="edit__title">
                    <label htmlFor="title">Заголовок</label>
                    <input onChange={event => setKeyword(event.target.value)} id="title" type="text" />
                </div>
                <button onClick={() => addKeywordHandler()} className="btn-action">Сохранить</button>
                <Link to={"../news"}> <button className="btn-neutral">Назад</button> </Link>
            </div>
        </div>
    )
}

export default AddKeyword;