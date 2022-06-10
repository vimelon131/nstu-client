import React from 'react'
import { Link } from 'react-router-dom';
import { deleteNews } from '../../../actions/news';
import { useDispatch } from 'react-redux';
import { deleteQuestion } from '../../../actions/questions';

const Question = ({question}) => {
    const dispatch = useDispatch();
    function deleteQuestionHandler() {
        dispatch(deleteQuestion(question))
    }
    return (
        <div className='news__item'>
            <div className="news__date">{question.name}</div>
            <div className="news__title">{question.answer}</div>
            <div className="news__category">{question.date.toString().slice(0,10)}</div>
            <div className="news__manage">
                <Link to={`edit/${question._id}`}>Редактировать</Link>
                <button onClick={()=> deleteQuestionHandler()} className="delete">X</button>
            </div>
        </div>
    )
}

export default Question;