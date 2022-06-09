import React from 'react'
import ShortSpec from '../ShortSpec/ShortSpec';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpec } from '../../actions/spec';
import "./main.css";
import stripe from "../../assets/stripe-h.png"

const Main = () => {
    const dispatch = useDispatch();
    const specs = useSelector(state => state.spec.specs).map(spec => spec.trace ? <ShortSpec key={spec._id} spec={spec}/> : null);

    useEffect(() => {
        if (specs.length == 0)
            dispatch(getSpec());
    });
    return (
        <div className="page-wrap">
            <div className='container-main'>
                <div className="content">
                    <p className='main__title'>Направления подготовки</p>
                    <hr style={{ backgroundColor: 'black'}}/>
                    <p style={{fontSize: "20px"}}>Факультет автоматики и вычислительной техники Новосибирского государственного технического университета (НГТУ) проводит подготовку магистров по 2 направлениям:</p>
                    {specs}
                </div>
            </div>
            
        </div>
        
    )
}

export default Main;
