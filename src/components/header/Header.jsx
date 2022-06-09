import React from 'react'
import logo from '../../assets/logo.png';
import './header.css'
import Navbar from './Navbar.jsx';
import {Icon24LogoVk} from "@vkontakte/icons"
import yticon from '../../assets/youtube-icon.png'
import vkicon from "../../assets/iconvk.png"

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__upper">
                    <div className="logo-info">
                        <img src={logo} alt="" className='logo'/>
                        <div className="logo-name"> Магистратура  <span style={{fontWeight:"bold",display:"block"}}>кафедры АСУ</span></div>
                    </div>
                    <div className="contacts">
                        Контакты приемной коммисии:
                        <div className="info">
                            <a href="mailto:pk@nstu.ru" className="contacts__mail">pk@nstu, </a>
                            <a href="phone:+73833460231" className="contacts_phone">+7 (383) 346-02-31 </a>
                        </div>
                        <div className="socials">
                            <a target="_blank" href="https://vk.com/nstu_vk"><img style={{marginRight: "10px"}} src={vkicon} alt="" /></a>
                            <a target="_blank" href="https://www.youtube.com/c/VideoNSTU"><img src={yticon} alt="" /></a>
                        </div>
                    </div>
                </div>
                <hr style={{ backgroundColor: 'black'}}/>
                <Navbar/>
            </div>
        </div>
    )
}

export default Header