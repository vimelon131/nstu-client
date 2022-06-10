import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGraduates } from '../../actions/graduates';
import { syncGraduates } from '../../actions/graduates';
import GraduateList from './graduatesList/GraduateList';
import GradReq from './graduatesList/GradReq';


const GraduatesA = () => {
    const dispatch = useDispatch();
    const graduates = useSelector(state => state.graduates.graduates);
    const graduatesReq = useSelector(state => state.graduates.graduates)
                                    .filter(el => el?.fromSite === true)
                                    .map(el => <GradReq key={el._id} graduate={el}/>);
    useEffect(() => {
        dispatch(getGraduates());
    }, [graduates]);
    function syncGraduatesHandler() {
        dispatch(syncGraduates())
    }
    return (
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление выпускниками</p>
            <hr />
            <GraduateList />
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncGraduatesHandler()} className="btn-action">Синхронизировать</button>
            <p className='page__title'>Запросы на размещение</p>
            <hr />
            {graduatesReq}
        </div>
    )
}

export default GraduatesA;