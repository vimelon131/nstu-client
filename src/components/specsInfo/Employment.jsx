import React from 'react'
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Employment = () => {
    let params = useParams();
    const spec = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
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