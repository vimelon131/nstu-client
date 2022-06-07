import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Outlet, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MainInfo = () => {
    let params = useParams();
    const spec = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
    return (
        <div className='page-content'>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>{spec.name.charAt(0).toUpperCase() + spec.name.slice(1)}</h2>
                <div className="spec-intro">
                    <div className="spec-hello">{spec.helloWord}</div>
                    <div className="spec-ruk">
                        <img src={spec.specRuk.img} style={{height: "200px", width: "200px"}} alt="" />
                        <p><span style={{fontWeight: "bold"}}>{spec.specRuk.name}</span> <br />{spec.specRuk.job}<br />{spec.specRuk.contact}</p>
                        
                    </div>
                </div>
                
            </div>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>Количество мест для приема:</h2>
                <p>Бюджетных мест: {spec.budget}</p>
                <p>Контрактных мест: {spec.contract}</p>
                <p>Стоимость обучения: {spec.cost} рублей в год</p>
                <h2 style={{marginTop: 0}}>Проходной балл:</h2>
                {spec.passingScore.budget ? <p>На бюджет: {spec.passingScore.budget}</p> : ''}
                {spec.passingScore.contract ? <p>На контракт: {spec.passingScore.contract}</p> : ''}
                <p>Обращаем внимание, что проходные баллы определяются по итогам зачисления, и каждый год могут меняться как в большую, так и в меньшую сторону.</p>
            </div>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>Актуальность программы:</h2>
                {spec.programRelevance.map(el => <p>{el}</p>)}
            </div>
        </div>
    )
}

export default MainInfo;