import React from 'react';
import "./question.css"
import Question from './question';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../../actions/questions.js';

const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions).map(question => <Question key={question._id} question={question}/>);

    useEffect(() => {
        if (questions.length == 0)
            dispatch(getQuestions());
    });
    return (
        <div style={{backgroundColor: "transparent"}} className='container-main'>
            <div className="content">
                <p className='page__title'>Вопросы и ответы</p>
                {questions}
            </div>
        </div>
    );
}

export default Questions;
