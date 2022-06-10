import React from 'react'
import './ShortSpec.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpec } from '../../actions/spec';
import { Link, useNavigate } from 'react-router-dom';

const ShortSpec = ({spec}) => {
    const specURI = spec._id;
    const nav = useNavigate();
    return (
        <div className='short-spec'>
            <div className="short-spec__title"><Link className="spec-link" to={`/specs/${specURI}/info`}>{spec.name.charAt(0).toUpperCase() + spec.name.slice(1)}</Link></div>
            <div className="short-spec__content">
                <div className="short-spec__descr">{spec.shortInfo}</div>
                <div className="short-spec__info">
                    <div className="short-spec__icon">
                        <AccessTimeIcon/> 
                        <div style={{marginLeft: '5px'}}>
                            <span className='icon__info'>2 года</span> <span className='icon__info'>4 семестра</span>
                        </div> 
                    </div>
                    <div className="short-spec__icon">
                        <HandshakeIcon/>
                        <div style={{marginLeft: '5px'}}>
                            <span className='icon__info'>{spec.budget} бюджетных мест</span> <span className='icon__info'>{spec.contract} контрактных мест</span>
                        </div> 
                    </div>
                    <div className="short-spec__icon">
                        <SchoolIcon/>
                        <div style={{marginLeft: '5px'}}>
                            <span className='icon__info'>Присваиваемая квалификация:</span> <span className='icon__info' style={{fontWeight: '300'}}>магистр</span>
                        </div> 
                    </div>
                    <div className="short-spec__icon">
                        <ApartmentIcon/>
                        <div style={{marginLeft: '5px'}}>
                            <span className='icon__info'>Выпускающая кафедра:</span> <span className='icon__info' style={{fontWeight: '300'}}>магистр прикладной информатики</span>
                        </div> 
                    </div>
                </div>
            </div>
            <button onClick={async event => {nav(`/specs/${specURI}/info`)}} className="short-spec__more">ПОДРОБНЕЕ</button>
        </div>
    )
}

export default ShortSpec;