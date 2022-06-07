
import React from 'react'
import { Outlet, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Subjects = () => {
    let params = useParams();
    const spec = useSelector(state => state.spec.specs).filter(el => el._id === params.specID)[0];
    return (
        <div className='page-content'>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>{spec.name.charAt(0).toUpperCase() +spec.name.slice(1)}</h2>
                <p>В текущем разделе вы можете ознакомиться с документами образовательной программы и перечнем изучаемых дисциплин, которые вы будете проходить во время обучения.</p>
                <p style={{fontWeight: "bold",marginBottom: 0}}>Документы образовательной программы:</p>
                <div className="subg_docs">
                    {spec.documents.map(el => <a className="doc-link" href={el.url}>{el.name}</a>)}
                </div>
            </div>
            <div className="page-block">
                <h2 style={{marginTop: 0}}>Изучаемые дисциплины:</h2>
                <ul className='subg__list'>
                    {spec.subjects.map(el => <li className="subg__list__el">{el}</li>)}
                </ul>
            </div>
            
        </div>
    )
}

export default Subjects;