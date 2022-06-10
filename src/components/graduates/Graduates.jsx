import React from 'react'
import Graduate from './Graduate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGraduates } from '../../actions/graduates.js';
import { useState } from 'react';
import { addGraduates } from '../../actions/graduates.js';


const Graduates = () => {
    const dispatch = useDispatch();
    const graduates = useSelector(state => state.graduates.graduates).filter(el => el?.fromSite !== true).map(graduate => <Graduate graduate={graduate}/>);
    const [ModalActive, setModalActive] = useState(false);
    const [visible, setVisible] = useState(false);
    const [graduate, setGraduate] = useState({});
    function addGraduateHandler() {
        dispatch(addGraduates({...graduate, fromSite: true}));
        setModalActive(false);
        setVisible(true)
    }
    useEffect(() => {
        if (graduates.length == 0)
            dispatch(getGraduates());
    });
    return (
        <div className="page-wrap">
            <div className='container-main'>
                <div className="content">
                    <p className='page__title'>Выпускники</p>
                    <hr />
                    <p className='page__desc'>В текущем разделе вы можете ознакомиться с отзывами выпускников прошлых лет, которые получали образование на факультете Автоматики и вычислительной техники. Отзывы выпускников - это реальные примеры возможностей профессионального развития и карьерного роста, которые открываются перед выпускниками.</p>
                    {graduates}
                    <div className={ModalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
                        <div className={ModalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                            <p className='page__title'>Оставить отзыв</p>
                            <hr />
                            <div style={{marginBottom: "10px"}} className="edit__title">
                                <label style={{color: "black",marginRight: "10px"}} htmlFor="title">ФИО</label>
                                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setGraduate({...graduate, name: event.target.value})} id="title" type="text" />
                            </div>
                            <div style={{marginBottom: "10px"}} className="edit__date">
                                <label style={{color: "black",marginRight: "10px"}} htmlFor="date">Год выпуска</label>
                                <input style={{fontSize: "18px"}} id="date" type="text" onChange={event => setGraduate({...graduate, graduationDate: event.target.value})} />
                            </div>
                            <div style={{marginBottom: "10px"}} className="edit__category">
                                <label style={{color: "black",marginRight: "10px"}} htmlFor="categ">Факультет</label>
                                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setGraduate({...graduate, faculty: event.target.value})} />
                            </div>
                            <div style={{marginBottom: "10px"}} className="edit__category">
                                <label style={{color: "black",marginRight: "10px"}} htmlFor="categ">Место работы</label>
                                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setGraduate({...graduate, job: event.target.value})} />
                            </div>
                            <div style={{marginBottom: "10px"}} className="edit__content">
                                <label style={{display: "block",color: "black",marginRight: "10px"}} htmlFor="content">Отзыв</label>
                                <textarea style={{fontSize: "18px"}} name="content" id="content" cols="70" rows="20" onChange={event => setGraduate({...graduate, review: event.target.value})} />
                            </div>
                            <div style={{marginBottom: "10px"}} className="edit__category">
                                <label style={{color: "black",marginRight: "10px"}} htmlFor="categ">Фото</label>
                                <input style={{fontSize: "18px"}} id="categ"  type="file" onChange={event => setGraduate({...graduate, file: event.target.files[0]})} />
                            </div>
                            <button onClick={() => addGraduateHandler()} className="btn-action">Отправить</button>
                            <button onClick={() => setModalActive(false)} className="btn-neutral">Закрыть</button> 
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="block-question">
                            Обучались на кафедре АСУ? Не забудьте оставить отзыв!
                        </div>
                        <div className='block-btn'>
                            {visible ?
                            <div className="question-asked">
                                Отзыв отправлен!
                            </div> :
                            <button onClick={() => setModalActive(true)} style={{width: "100%", padding: "5px", border: "none"}} className="btn-action">Оставить отзыв</button>
                            }
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Graduates;