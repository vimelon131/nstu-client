import React from 'react';
import teacherMissing from "../../assets/user.png"

const Teacher = ({teacher}) => {
    return (
        <div className='person-block'>
            <div className="teacher__title">
                {teacher.name}
            </div>
            <div className="teacher__bottom">
                <div className="teacher__img">
                    <img style={{width: "80%", height: "80%"}} src={teacher.img !== '' ? teacher.img : teacherMissing} alt="" />
                </div>
                <div className="teacher__info">
                    <div className="teacher__job">
                        {teacher.jobTitle}
                    </div>
                    <div style={{marginBottom: "80px"}} className="teacher__job">
                        Персональный сайт: <a href={teacher.url}>сайт</a>
                    </div>
                    <div className="teacher__job">
                        Преподаваемые дисциплины:
                        <ul style={{paddingLeft: "15px", fontWeight: "300"}}>
                            {teacher.subjects.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher;
