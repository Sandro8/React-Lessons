import React from 'react';
import './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className='nav'>
            <div>
                <a href="/Profile">Profile</a><br />
                <a href="News">News</a><br />
                <a href="Messages">Messages</a><br />
                <a href="Music">Music</a><br />
                <a href="Foto">Foto</a><br />
            </div>
        </aside>
    );
}
export default Sidebar;