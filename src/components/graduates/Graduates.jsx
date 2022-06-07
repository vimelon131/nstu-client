import React from 'react'
import Graduate from './Graduate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGraduates } from '../../actions/graduates.js';


const Graduates = () => {
    const dispatch = useDispatch();
    const graduates = useSelector(state => state.graduates.graduates).map(graduate => <Graduate graduate={graduate}/>);

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
                </div> 
            </div>
        </div>
    )
}

export default Graduates;