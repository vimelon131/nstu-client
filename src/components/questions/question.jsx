import React from 'react'

const Question = ({question}) => {
    return (
        <div className='question'>
            <p style={{marginTop: 0, fontSize: "25px"}}>{question.name}</p>
            <div className="answer">
                {question.answer}
            </div>
        </div>
    )
}

export default Question;