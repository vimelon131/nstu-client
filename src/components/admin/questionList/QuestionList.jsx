import React from 'react'
import "./questionList.css"
import { useSelector } from 'react-redux'
import Question from './Question'

const QuestionList = () => {
    const questions = useSelector(state => state.questions.questions).filter(el => el.fromSite == false).map(question => <Question key={question._id} question={question}/>)
    return (
        <div className='question-list'>
            <div className="question-list__header">
                <div className="question-list__date">Вопрос</div>
                <div className="question-list__title">Ответ</div>
                <div className="question-list__category">Дата</div>
                <div className="question-list__manage">Управление</div>
            </div>
            {questions}
        </div>
    )
}

export default QuestionList;