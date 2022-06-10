import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGraduates } from '../../../actions/graduates';

const GraduateADM = ({graduate}) => {
    const dispatch = useDispatch();
    function deleteGraduateHandler() {
        dispatch(deleteGraduates(graduate))
    }
    return (
        <div className='graduate__item'>
            <div className="news__date">{graduate.name}</div>
            <div className="news__title">{graduate.graduationDate}</div>
            <div className="news__category">{graduate.faculty}</div>
            <div className="news__manage">
                <Link to={`edit/${graduate._id}`}>Редактировать</Link>
                <button onClick={()=> deleteGraduateHandler()} className="delete">X</button>
            </div>
        </div>
    )
}

export default GraduateADM;