import React from 'react'
import { NavLink } from 'react-router-dom';

const SideBarA = () => {
    return (
        <div className='sidebar'>
            <NavLink className="sidebar__link" to={`/manage/admin/news`}>Новости</NavLink>
            <NavLink className="sidebar__link" to={`/manage/admin/speciality`}>Направления</NavLink>
            <NavLink className="sidebar__link" to={`/manage/admin/teachers`}>Преподаватели</NavLink>
            <NavLink className="sidebar__link" to={`/manage/admin/graduates`}>Выпускники</NavLink>
            <NavLink className="sidebar__link" to={`/manage/admin/questions`}>Вопросы</NavLink>
        </div>
    )
}

export default SideBarA;