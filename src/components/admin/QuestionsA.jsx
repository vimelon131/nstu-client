import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../actions/questions';
import { addQuestionHands } from '../../actions/questions';
import QuestionList from './questionList/QuestionList';
import AskedQuesions from './questionList/AskedQuesions';

const QuestionsA = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    const askedQuestions = useSelector(state => state.questions.questions).filter(el => el.fromSite === true);
    useEffect(() => {
        dispatch(getQuestions());
    }, []);
 
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление вопросами</p>
            <hr />
            <QuestionList questions={questions}/>
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <p className='page__title'>Заданные вопросы</p>
            <hr />
            <AskedQuesions questions={askedQuestions}/>
        </div>
    )
}

export default QuestionsA;