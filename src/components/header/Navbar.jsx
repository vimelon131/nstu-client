import React from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {
        color: "red",
        backgroundColor: "transparent"
      };
    const menu = [
        {name: 'Главная', path: "/"},
        {name: 'Новости', path: "/news"},
        {name: 'Выпускники', path: "/graduates"},
        {name: 'Вопросы и ответы', path: "/questions"},
        {name: 'Преподаватели', path: "/teachers"},
    ];
    return (
        <div className='nav'>
            {menu.map((el,i) =>
                <div key={i} className="navbar__block"><NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } className="nav-link" to={el.path}>{el.name}</NavLink></div>
            )}
        </div>
    )
}

export default Navbar;