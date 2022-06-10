import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsList from './newsList/NewsList';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { syncNews, addNews } from '../../actions/news';
import { getQuestions } from '../../actions/questions';
import { addQuestionHands } from '../../actions/questions';
import QuestionList from './questionList/QuestionList';
import AskedQuesions from './questionList/AskedQuesions';

const QuestionsA = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    useEffect(() => {
        dispatch(getQuestions());
    }, [questions]);
    function syncNewsHandler() {
        dispatch(syncNews())
    }
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление вопросами</p>
            <hr />
            <QuestionList />
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <p className='page__title'>Заданные вопросы</p>
            <hr />
            <AskedQuesions />
        </div>
    )
}

export default QuestionsA;