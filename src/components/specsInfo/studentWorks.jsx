import React from 'react'
import { Outlet, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpec } from '../../actions/spec';
import { useState } from 'react';

const StudentWorks = () => {
    let params = useParams();
    const spec = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
    const rootClasses = ["student-publ"];
    const [visible, setVisible]  = useState(false);
    if (visible) {
        rootClasses.push("show");
    }
    function showAll() {
        setVisible(!visible);
    }
    return (
        <div className='page-content'>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>Темы выпускных работ:</h2>
                <ul>
                    {spec.graduationsThemes.map(el => <li key={el}>{el}</li>)}
                </ul>
            </div>
            <div className="page-block">
                <h2 style={{marginTop: 0,display: "inline-block"}}>Публикации студентов:</h2>
                <button onClick={showAll} className="btn-show">показать все</button>
                <div className={rootClasses.join(' ')}>
                    <ul style={{paddingLeft: "70px", marginTop: "0px"}}>
                        {spec.studentPublications.map(el => <li>{el}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StudentWorks;