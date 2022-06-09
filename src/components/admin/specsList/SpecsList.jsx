import React from 'react'
import "./specsList.css"
import { useSelector } from 'react-redux'
import Specs from './Specs'

const SpecsList = () => {
    const specs = useSelector(state => state.spec.specs).map(spec => <Specs key={spec._id} spec={spec}/>)
    return (
        <div className='spec-list'>
            <div className="spec-list__header">
                <div className="spec-list__date">Направление</div>
                <div className="spec-list__title">Специальность</div>
                <div className="spec-list__category">Отображать</div>
                <div className="spec-list__manage">Управление</div>
            </div>
            {specs}
        </div>
    )
}

export default SpecsList;