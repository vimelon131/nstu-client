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
    const [theme, setTheme] = useState('');
    const [publications, setPublications] = useState('');
    const [visPublications, setVisPublications] = useState(false);

    function updateSpecHandler() {
        dispatch(updateSpecs(spec));
        if (!spec.name || !spec.area || !spec.budget) {
            alert('Все поля должны быть заполнены!');
        } else {
            dispatch(updateSpecs(spec));
            alert('Информация о направлении обновлена!');
        } 
    }
    function delThemeHandler(el) {
        setSpec({...spec, graduationsThemes: spec.graduationsThemes.filter(elem => elem !== el)});
    }
    function addThemeHandler() {
        if (theme) {
            setSpec({...spec, graduationsThemes: [...spec.graduationsThemes, theme]});
            setTheme("")
        }
    }
    function delPublHandler(el) {
        setSpec({...spec, studentPublications: spec.studentPublications.filter(elem => elem !== el)});
    }
    function addPublHandler() {
        if (publications) {
            setSpec({...spec, studentPublications: [...spec.studentPublications, publications]});
            setPublications("")
        }
    }
    function showPublicatations() {
        setVisPublications(!visPublications);
    }
    return (
        <div className='news-edit'>
            <p className='page__title'>Редактирование направления</p>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Отображать</label></div>  
                <div className="form__field__value"><select style={{fontSize: "18px",padding: 5}} onChange={event => setSpec({...spec, trace: event.target.value})} value={spec.trace} name="" id="">
                    <option value="true">Да</option>
                    <option value="false">Нет</option>
                </select></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Напрваление</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setSpec({...spec, area: event.target.value})} id="title" type="text"  value={spec.area}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Специальность</label></div>  
                <div className="form__field__value"><input className='field__input' onChange={event => setSpec({...spec, name: event.target.value})} id="title" type="text"  value={spec.name}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Бюджетных мест</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px",padding: 5}} onChange={event => setSpec({...spec, budget: event.target.value})} id="title" type="text" value={spec.budget}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Контрактных мест</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px",padding: 5}} onChange={event => setSpec({...spec, contract: event.target.value})} id="title" type="text" value={spec.contract}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Стоимость обучения</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px",padding: 5}} onChange={event => setSpec({...spec, cost: event.target.value})} id="title" type="text" value={spec.cost}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Краткая информация(для главной)</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content"  onChange={event => setSpec({...spec, shortInfo: event.target.value})} value={spec.shortInfo} cols="60" rows="10"></textarea></div>
            </div>
            <hr />
            <p>Ответсвтенный за специальность</p>
           
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">ФИО</label></div>  
                <div className="form__field__value"><input className='field__input'  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, name: event.target.value}})} id="title" type="text" value={spec.specRuk?.name}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Должность</label></div>  
                <div className="form__field__value"><input className='field__input'  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, job: event.target.value}})} id="title" type="text" value={spec.specRuk?.job}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Контакты</label></div>  
                <div className="form__field__value"><input className='field__input'  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, contact: event.target.value}})} id="title" type="text" value={spec.specRuk?.contact}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Фотография</label></div>  
                <div className="form__field__value"><input placeholder='Ссылка на картинку(с портала НГТУ)' className='field__input' onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, img: event.target.value}})} id="title" type="text" value={spec.specRuk?.img}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Приветственное слово</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content"  onChange={event => setSpec({...spec, specRuk: {...spec.specRuk, helloWord: event.target.value}})} value={spec.specRuk?.helloWord} cols="60" rows="10"></textarea></div>
            </div>
            <hr />
            <p>Проходной балл</p>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">На бюджет</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px", padding: 5}} onChange={event => setSpec({...spec, passingScore: {...spec.passingScore, budget: event.target.value}})} id="title" type="text" value={spec.passingScore?.budget}/></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">На контракт</label></div>  
                <div className="form__field__value"><input style={{fontSize: "18px", padding: 5}} onChange={event => setSpec({...spec, passingScore: {...spec.passingScore, contract: event.target.value}})} id="title" type="text" value={spec.passingScore?.contract}/></div>
            </div>
            <hr />
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Актуальность</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content"  onChange={event => setSpec({...spec, programRelevance: event.target.value})} value={spec.programRelevance} cols="60" rows="10"></textarea></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Трудоустройство</label></div>  
                <div className="form__field__value"><textarea className='field__input' name="content" id="content"  onChange={event => setSpec({...spec, employment: event.target.value})} value={spec?.employment} cols="60" rows="10"></textarea></div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Темы выпускных работ</label></div>  
                <div className="form__field__value">{spec.graduationsThemes.map(el => <div className='item__li'>
                                                                                        <div className="li__text">{el}</div>
                                                                                        <div className="news__manage">
                                                                                            <button onClick={() => delThemeHandler(el)} className="delete">X</button>
                                                                                        </div>
                                                                                    </div>)}
                    <div className='item__li'>
                        <div className="li__enter"><input className='field__input' onChange={event => setTheme(event.target.value)} id="title" type="text"  value={theme}/> </div>
                        <div className="news__manage">
                            <button onClick={()=> addThemeHandler()} className="approve">✔</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form__field">
                <div className="form__field__name"><label className='field__label' htmlFor="title">Публикации студентов</label></div>  
                <div className="form__field__value"><button onClick={showPublicatations} className="btn-show">{!visPublications ? "показать" : "скрыть"}</button>{spec.studentPublications.map(el => <div style={{display: visPublications ? "block" : "none"}}><div className="item__li">
                                                                                        <div className="li__text">{el}</div>
                                                                                        <div className="news__manage">
                                                                                            <button onClick={() => delPublHandler(el)} className="delete">X</button>
                                                                                        </div>
                                                                                    </div></div>)}
                    <div className='item__li'>
                        <div className="li__enter"><input className='field__input' onChange={event => setPublications(event.target.value)} id="title" type="text"  value={publications}/> </div>
                        <div className="news__manage">
                            <button onClick={()=> addPublHandler()} className="approve">✔</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => updateSpecHandler()} className="btn-action">Сохранить</button>
            <button className="btn-neutral"><Link style={{color: "black", textDecoration: "none"}} to={"../speciality"}> Назад</Link></button> 
        </div>
    )
}

export default SpecEdit;