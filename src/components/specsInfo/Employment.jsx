import React from 'react'
import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSpec } from '../../actions/spec';

const Employment = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const spec = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
    console.log(params.specID);
    useEffect(() => {
        if (spec.length == 0)
            dispatch(getSpec());
    });
    return (
        <div className='page-content'>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>Трудоустройство:</h2>
                {spec.employment.map(el => <p>{el}</p>)}
            </div>
        </div>
    )
}

export default Employment;