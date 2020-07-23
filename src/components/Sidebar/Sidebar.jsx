import React from 'react';
import a from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <aside className='nav'>
            <div>
                <NavLink to="/Profile" activeClassName={a.active}>Profile</NavLink><br />
                <NavLink to="/News" activeClassName={a.active}>News</NavLink><br />
                <NavLink to="/Messages" activeClassName={a.active}>Messages</NavLink><br />
                <NavLink to="/Foto" activeClassName={a.active}>Foto</NavLink>
            </div>
        </aside>
    );
}
export default Sidebar;