import React from 'react'
import "./questionList.css"
import Question from './Question'

const QuestionList = ({questions}) => {
    return (
        <div className='question-list'>
            <div className="question-list__header">
                <div className="question-list__date">Вопрос</div>
                <div className="question-list__title">Ответ</div>
                <div className="question-list__category">Дата</div>
                <div className="question-list__manage">Управление</div>
            </div>
            {questions.filter(el => el?.fromSite === false).map(question => <Question key={question._id} question={question}/>)}
        </div>
    )
}

export default QuestionList;