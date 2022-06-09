import React from 'react'
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import SideBarA from './SideBarA';

const Admin = () => {
    return (
        <div className="page-wrapper">
                <div className='specs-info'>
                    <div className="page-aside">
                        <div className="aside-menu">
                            <SideBarA />
                        </div>
                    </div> 
                    <div className="page-content">
                        <Outlet />
                    </div>  
                    
                </div>
        </div>
    )
}

export default Admin;