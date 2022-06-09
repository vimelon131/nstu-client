import React from 'react'
import SpecsList from './specsList/SpecsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpec, syncSpecs } from '../../actions/spec';
import { Link } from 'react-router-dom';

const SpecialityA = () => {
    const dispatch = useDispatch();
    const specs = useSelector(state => state.spec.specs);
    useEffect(() => {
        dispatch(getSpec());
    }, [specs]);
    function syncSpecsHandler() {
        dispatch(syncSpecs())
    }
    return (
        
        <div style={{margin: "20px"}}>
            <p className='page__title'>Управление направлениями</p>
            <hr />
            <SpecsList />
            <Link to={"add"}> <button className="btn-action">Добавить</button></Link>
            <button onClick={() => syncSpecsHandler()} className="btn-action">Синхронизировать</button>
        </div>
    )
}

export default SpecialityA;