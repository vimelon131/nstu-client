import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteQuestion } from '../../../actions/questions';
import { useState } from 'react';
import { updateQuestion } from '../../../actions/questions';

const AskedQuestion = ({question}) => {
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState("");
    function deleteQuestionHandler() {
        dispatch(deleteQuestion(question))
    }
    function updateQuestionHandler() {
        dispatch(updateQuestion({...question, answer: answer, fromSite: false}))

    }
    return (
        <div className='news__item'>
            <div className="news__date">{question.name}</div>
            <div className="news__title"><textarea onChange={(e)=>setAnswer(e.target.value)} name="" id="" cols="20" rows="10"></textarea></div>
            <div className="news__category">{question.date.toString().slice(0,10)}</div>
            <div className="news__manage">
                <button onClick={()=> updateQuestionHandler()} className="approve">✔</button>
                <button onClick={()=> deleteQuestionHandler()} className="delete">X</button>
            </div>
        </div>
    )
}

export default AskedQuestion;