import React from 'react'
import { Link } from 'react-router-dom';
import { deleteNews } from '../../../actions/news';
import { useDispatch } from 'react-redux';
import { deleteSpecs } from '../../../actions/spec.js';

const Specs = ({spec}) => {
    const dispatch = useDispatch();
    function deleteSpecHandler() {
        dispatch(deleteSpecs(spec))
    }
    return (
        <div className='news__item'>
            <div className="news__date">{spec.area}</div>
            <div className="news__title">{spec.name}</div>
            <div className="news__category">{spec.trace ? "Да" : "Нет"}</div>
            <div className="news__manage">
                <Link to={`edit/${spec._id}`}>Редактировать</Link>
                <button onClick={()=>deleteSpecHandler()} className="delete">X</button>
            </div>
        </div>
    )
}

export default Specs;