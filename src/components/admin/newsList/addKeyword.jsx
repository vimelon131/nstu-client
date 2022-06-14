import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addKeyword } from '../../../actions/news';
import { Link } from 'react-router-dom';

const AddKeyword = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    function addKeywordHandler() {
        if (!keyword) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(addKeyword(keyword));
            alert('Ключевое слово добавлено!');
        } 
    }
    return (
        <div>
            <div className='news-edit'>
                <div className="form__field">
                    <div className="form__field__name"><label className='field__label' htmlFor="title">Ключевое слово</label></div>  
                    <div className="form__field__value"><input className='field__input' onChange={event => setKeyword(event.target.value)} id="title" type="text"/></div>
                </div>
                <button onClick={() => addKeywordHandler()} className="btn-action">Сохранить</button>
                <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../news"}> Назад</Link></button> 
            </div>
        </div>
    )
}

export default AddKeyword;