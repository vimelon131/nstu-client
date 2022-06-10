import React from 'react'
import { useDispatch} from 'react-redux';
import {useState} from "react";
import { Link } from 'react-router-dom';
import { addQuestionHands } from '../../../actions/questions';

const AddQuestion = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState({});
    function updateNewsHandler() {
        if (!question?.name) {
            alert('Поле "Вопрос" не должно бысть пустым')
        }
        dispatch(addQuestionHands(question));
    }

    return (
        <div className='news-edit'>
            <p className='page__title'>Добавление вопроса</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">Вопрос</label>
                <textarea style={{width: "500px", fontSize: "18px"}} onChange={event => setQuestion({...question, name: event.target.value})} id="title" type="text" />
            </div>
        
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Ответ</label>
                <textarea style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setQuestion({...question, answer: event.target.value})}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Дата</label>
                <input style={{fontSize: "18px"}} id="date" type="date" onChange={event => setQuestion({...question, date: event.target.value})} />
            </div>
            <button onClick={() => updateNewsHandler()} className="btn-action">Добавить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../questions"}> Назад</Link></button> 
        </div>
    )
}

export default AddQuestion;