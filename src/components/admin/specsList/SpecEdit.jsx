import React from 'react'
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { Link } from 'react-router-dom';
import { updateSpecs } from '../../../actions/spec';

const SpecEdit = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const specID = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
    const [spec, setSpec] = useState(specID);
    function updateSpecHandler() {
        dispatch(updateSpecs(spec));
    }

    return (
        <div className='news-edit'>
            <p className='page__title'>Редактирование направления</p>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">Отображать</label>
                <select style={{fontSize: "18px"}} onChange={event => setSpec({...spec, trace: event.target.value})} value={spec.trace} name="" id="">
                    <option value="true">Да</option>
                    <option value="false">Нет</option>
                </select>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__title">
                <label style={{marginRight: "10px"}} htmlFor="title">Напрваление</label>
                <input style={{width: "500px", fontSize: "18px"}} onChange={event => setSpec({...spec, area: event.target.value})} id="title" type="text" value={spec.area}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__date">
                <label style={{marginRight: "10px"}} htmlFor="date">Специальность</label>
                <input style={{width: "500px",fontSize: "18px"}} id="date" type="text" onChange={event => setSpec({...spec, name: event.target.value})} value={spec.name}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__category">
                <label style={{marginRight: "10px"}} htmlFor="categ">Бюджетных мест</label>
                <input style={{fontSize: "18px"}} id="categ" type="text" onChange={event => setSpec({...spec, budget: event.target.value})} value={spec.budget}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Контрактных мест</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, contract: event.target.value})} value={spec.contract}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Контрактных мест</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, contract: event.target.value})} value={spec.contract}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Краткая информация(для главной)</label>
                <textarea style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, shortInfo: event.target.value})} value={spec.shortInfo} cols="60" rows="10"></textarea>
            </div>
            <hr />
            <p>Ответсвтенный за специальность</p>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">ФИО</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, name: event.target.value}})} value={spec.specRuk?.name}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Должность</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, job: event.target.value}})} value={spec.specRuk?.job}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Контакты</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, contact: event.target.value}})} value={spec.specRuk?.contact}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Ссылка на картинку(с портала НГТУ)</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, img: event.target.value}})} value={spec.specRuk?.img}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">Приветственное слово</label>
                <textarea style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, helloWord: event.target.value}})} value={spec.specRuk?.helloWord} cols="60" rows="10"></textarea>
            </div>
            <hr />
            <p>Проходной балл</p>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">На бюджет</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, passingScore: {...spec.passingScore, budget: event.target.value}})} value={spec.passingScore?.budget}/>
            </div>
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{marginRight: "10px"}} htmlFor="content">На контракт</label>
                <input style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, passingScore: {...spec.passingScore, contract: event.target.value}})} value={spec.passingScore?.contract}/>
            </div>
            <hr />
            <div style={{marginBottom: "10px"}} className="edit__content">
                <label style={{display: "block",marginRight: "10px"}} htmlFor="content">Актуальность</label>
                <textarea style={{fontSize: "18px"}} name="content" id="content"  onChange={event => setSpec({...spec, programRelevance: event.target.value})} value={spec?.programRelevance} cols="60" rows="10"></textarea>
            </div>
            <button onClick={() => updateSpecHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../speciality"}> Назад</Link></button> 
        </div>
    )
}

export default SpecEdit;