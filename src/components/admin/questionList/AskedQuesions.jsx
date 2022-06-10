import React from 'react'
import { useSelector } from 'react-redux'
import AskedQuestion from './AskedQuestion'

const AskedQuesions = () => {
    const questions = useSelector(state => state.questions.questions).filter(el => el.fromSite == true).map(question => <AskedQuestion key={question._id} question={question}/>)
    return (
        <div className='question-list'>
            <div className="question-list__header">
                <div className="question-list__date">Вопрос</div>
                <div className="question-list__title">Ответ</div>
                <div className="question-list__category">Дата</div>
                <div className="question-list__manage">Управление</div>
            </div>
            {questions.length == 0 ? <p style={{fontSize: 30}}>Пока нет новых вопросов!</p> : questions}
        </div>
    )
}

export default AskedQuesions;