import React from 'react';
import "./sidebar.css"
import { NavLink } from 'react-router-dom';

const SideBar = ({specID}) => {
    return (
        <div className='sidebar'>
            <NavLink className="sidebar__link" to={`/specs/${specID}/info`}>Информация о направлении</NavLink>
            <NavLink className="sidebar__link" to={`/specs/${specID}/subjects`}>Изучаемые дисциплины</NavLink>
            <NavLink className="sidebar__link" to={`/specs/${specID}/students-works`}>Работы студентов</NavLink>
            <NavLink className="sidebar__link" to={`/specs/${specID}/requirments`}>Требования к работам</NavLink>
            <NavLink className="sidebar__link" to={`/specs/${specID}/employment`}>Трудоустройство</NavLink>
        </div>
    )
}

export default SideBar;