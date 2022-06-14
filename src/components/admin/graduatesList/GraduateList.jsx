import React from 'react'
import "./graduateList.css"
import GraduateADM from './GraduateADM'

const GraduateList = ({graduates}) => {
    return (
        <div className='graduate-list'>
            <div className="graduate-list__header">
                <div className="graduate-list__date">ФИО</div>
                <div className="graduate-list__title">Год выпуска</div>
                <div className="graduate-list__category">Кафедра</div>
                <div className="graduate-list__manage">Управление</div>
            </div>
            {graduates.map(graduate => <GraduateADM key={graduate._id} graduate={graduate}/>)}
        </div>
    )
}

export default GraduateList;