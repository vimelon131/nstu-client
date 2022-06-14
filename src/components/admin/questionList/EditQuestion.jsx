import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { updateNews } from '../../../actions/news';
import { Link } from 'react-router-dom';
import { updateQuestion } from '../../../actions/questions';

const EditQuestion = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const questionID = useSelector(state => state.questions.questions).filter(el => el._id === params.questionID)[0];
    const [question, setQuestion] = useState(questionID);
    console.log(questionID);
    function updateNewsHandler() {
        dispatch(updateQuestion(question));
    }

    return (
        <div className='news-edit'>
            <p className='page__title'>Редактирование вопроса</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Вопрос</label></div>  
                <div className="form__field__value"><textarea className='field__input' onChange={event => setQuestion({...question, name: event.target.value})} id="title" type="text" value={question.name}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Ответ</label></div>  
                <div className="form__field__value"><textarea className='field__input' id="categ" type="text" onChange={event => setQuestion({...question, answer: event.target.value})} value={question.answer}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Дата</label></div>  
                <div className="form__field__value"><input  style={{fontSize: "18px"}} id="date" type="date" onChange={event => setQuestion({...question, date: event.target.value})} value={question.date.toString().slice(0,10)}/></div>
            </div>
            <button onClick={() => updateNewsHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../questions"}> Назад</Link></button> 
        </div>
    )
}

export default EditQuestion;