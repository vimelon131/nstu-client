import React from 'react'
import "./graduateList.css"
import GraduateADM from './GraduateADM'
import { useSelector } from 'react-redux'

const GraduateList = () => {
    const graduate = useSelector(state => state.graduates.graduates).map(graduate => <GraduateADM key={graduate._id} graduate={graduate}/>)
    return (
        <div className='graduate-list'>
            <div className="graduate-list__header">
                <div className="graduate-list__date">ФИО</div>
                <div className="graduate-list__title">Год выпуска</div>
                <div className="graduate-list__category">Кафедра</div>
                <div className="graduate-list__manage">Управление</div>
            </div>
            {graduate}
        </div>
    )
}

export default GraduateList;