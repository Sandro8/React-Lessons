import React from 'react';
import i from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <aside className='nav'>
            <div className={i.item}>Profile</div>
            <div className={i.item}>News</div>
            <div className={i.item}>Messages</div>
            <div className={i.item}>Music</div>
            <div className={i.item}>Foto</div>
        </aside>
    );
}
export default Sidebar;