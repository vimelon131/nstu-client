import React from 'react';
import "./question.css"
import Question from './question';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addQuestionSite, getQuestions } from '../../actions/questions.js';
import { useState } from 'react';
import { addNews } from '../../actions/news';

const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions).map(question => question?.fromSite !== true ? <Question key={question._id} question={question} /> : null);
    const [visible, setVisible] = useState(false);
    const [question, setQuestion] = useState({});
    useEffect(() => {
        if (questions.length == 0)
            dispatch(getQuestions());
    });
    function questionHandler() {
        dispatch(addQuestionSite(question));
        setVisible(true);
    }
    return (
        <div style={{backgroundColor: "transparent"}} className='container-main'>
            <div className="content">
                <p className='page__title'>Вопросы и ответы</p>
                <p className='page__desc'>В текущем разделе представлен профессорско-преподавательский состав кафедры Автоматизированных систем управления факультета автоматики и вычислительной техники. Для получения более подробной информации о преподавателе перейдите на его персональный сайт по указанной ссылке.</p>
                {questions}
                <div className="content-block">
                    <div className="block-question">
                        Остались вопросы? Можешь задать их прямо на сайте!
                    </div>
                    <div className='block-btn'>
                        {visible ?
                        <div className="question-asked">
                            Вопрос отправлен!
                        </div> :
                        
                        <div className="question-form">
                            <div className='question-field'>
                                <div className="field-label"><label htmlFor="">Вопрос</label></div>
                                <div className="field-input"><input onChange={(e) => setQuestion({...question, name: e.target.value})} className='input-question' type="text" /></div>
                            </div>
                            <div className='question-field'>
                                <div className="field-label"><label htmlFor="">Почта</label></div>
                                <div className="field-input"><input onChange={e => setQuestion({...question, mail: e.target.value})} className='input-question' type="text" /></div>
                            </div>
                            <div style={{margin: "auto", width: "80%"}}>
                                <button onClick={() => questionHandler()} style={{width: "100%", padding: "5px", border: "none"}} className="btn-action">Задать вопрос</button>
                            </div>
                            
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
