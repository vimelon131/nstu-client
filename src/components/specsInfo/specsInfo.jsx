import React from 'react';
import { Outlet, useParams} from 'react-router-dom';
import SideBar from './sideBar/sideBar';
import "./specsInfo.css";

const SpecsInfo = () => {
    let params = useParams();
    return (
        <div className="page-wrapper">
                <div className='specs-info'>
                    <div className="page-aside">
                        <div className="aside-menu">
                            <SideBar specID={params.specID}/>
                        </div>
                    </div>   
                    <Outlet />
                </div>
        </div>
    );
}

export default SpecsInfo;
