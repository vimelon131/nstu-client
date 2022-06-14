import React from 'react'
import SpecsList from './specsList/SpecsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpec, syncSpecs } from '../../actions/spec';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';

const SpecialityA = () => {
    const dispatch = useDispatch();
    const specs = useSelector(state => state.spec.specs);
    const isFetching = useSelector(state => state.spec.isFetching);

    useEffect(() => {
        dispatch(getSpec());
    }, []);
    function syncSpecsHandler() {
        dispatch(syncSpecs())
    }
    return (
        
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление направлениями</p>
            <hr />
            {isFetching === false 
            ? <SpecsList specs={specs}/> 
            : <Oval/>}
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncSpecsHandler()} className="btn-action">Синхронизировать</button>
        </div>
    )
}

export default SpecialityA;