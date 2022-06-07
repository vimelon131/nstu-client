import React from 'react'
import "./graduates.css"
import { useState } from 'react';

const Graduate = ({graduate}) => {
    const rootClasses = ["graduate__bottom"];
    const [visible, setVisible]  = useState(false);
    if (visible) {
        rootClasses.push("show");
    }
    function showAll() {
        setVisible(!visible);
    }
    return (
        <div style={{minHeight: "250px"}} className='person-block'>
            <div className="graduate__top">
                <div className="graduate__img">
                    <img style={{width: "80%", height: "100%"}} src={`https://www.nstu.ru/${graduate.img}`} alt="" />
                </div>
                <div className="graduate__info">
                    <div className="graduate__info_field">
                        <div className="field__name">ФИО</div>    
                        <div className="field__value fio">{graduate.name}</div>
                    </div>
                    <div className="graduate__info_field">
                        <div className="field__name">Год выпуска</div>  
                        <div className="field__value">{graduate.graduationDate}</div>
                    </div>
                    <div className="graduate__info_field">
                        <div className="field__name">Факультет</div>  
                        <div className="field__value">{graduate.faculty}</div>
                    </div>
                    {graduate.job ? 
                    <div className="graduate__info_field">
                        <div className="field__name">Место работы</div>
                        <div className="field__value">{graduate.job}</div>
                    </div> : ''}
                    <div className="graduate__info_field">
                        <div className="field__name">Отзыв</div>  
                        <div className="field__value"><button onClick={showAll} className="btn-show">показать</button></div>
                    </div>
                </div>
            </div>
            <div className={rootClasses.join(' ')}>
                {graduate.review}
            </div>            
         
        </div>
    )
}

export default Graduate;