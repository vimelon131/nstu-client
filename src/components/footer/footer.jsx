import React from 'react'
import "./footer.css"
import stripe from "../../assets/stripe-h.png";
import yticon from '../../assets/youtube-icon.png'
import vkicon from "../../assets/iconvk.png"

const Footer = () => {
    return (
        <div className='footer'>
            <img style={{width: "100%", height: "20px"}} src={stripe} alt="" className='logo'/>
            <div className="container">
                <div className="footer-info">
                    <div className="footer_contact">
                        <p>© НГТУ Магистратура кафедры АСУ, 2022</p>
                        <p>Адрес НГТУ: <br /> Россия, 630073, г. Новосибирск, пр-т К.Маркса, 20</p> 
                        <a target="_blank" style={{color: "white",fontWeight:"400"}} href="https://www.nstu.ru/">Официальный сайт НГТУ</a>
                        <p>Расположение кафедры АСУ:<br />7 корпус, ул. Немирова-Данченко, д.136, к. 811</p>
                        <a style={{color: "white",fontWeight:"400"}} href="mailto:kafedra@asu.cs.nstu.ru">kafedra@asu.cs.nstu.ru</a>
                    </div>
                    <div className="footer_socials">
                        <a target="_blank" href="https://vk.com/nstu_vk"><img style={{marginRight: "10px"}} src={vkicon} alt="" /></a>
                        <a target="_blank" href="https://www.youtube.com/c/VideoNSTU"><img src={yticon} alt="" /></a>
                        <p>Приемная коммисия: <br /> <a href="mailto:pk@nstu.ru" style={{color: "white",textDecoration: "none", fontWeight: "300"}}>pk@nstu, </a>
                            <a href="phone:+73833460231" style={{color: "white", textDecoration: "none", fontWeight: "300"}}>+7 (383) 346-02-31 </a></p>
                        <p>Кафедра АСУ:</p>
                        <p>(383) 346-11-00, 346-15-59</p>
                        <p>Факс: (383) 346-11-00</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;