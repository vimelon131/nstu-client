import React from 'react'
import Graduate from '../../graduates/Graduate'
import { updateGraduates } from '../../../actions/graduates'
import { useDispatch } from 'react-redux'
import { deleteGraduates } from '../../../actions/graduates'

const GradReq = ({graduate}) => {
    const dispatch = useDispatch()
    function gradUpdHandler() {
        dispatch(updateGraduates({...graduate, fromSite:false}));
    }
    function gradDelHandler() {
        dispatch(deleteGraduates(graduate));
    }
    return (
        <div>
            <Graduate graduate={graduate}/>
            <button onClick={() => gradUpdHandler()} className="btn-action">Подтвердить</button>
            <button onClick={() => gradDelHandler()} className="btn-cancel">Отклонить</button>
        </div>
    )
}

export default GradReq;