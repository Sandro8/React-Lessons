import React from 'react';
import i from './Messages.module.css'
import Post from '../Posts/post';
import { NavLink } from 'react-router-dom';

const Messages = (props) => {
    return (
        <div className={i.Messages}>
            <div>
                <div>
                    <NavLink to="/Messages/1" activeClassName={i.active}>Василий</NavLink>
                </div>
                <div>
                    <NavLink to="/Messages/2" activeClassName={i.active}>Андрей</NavLink>
                </div>
                <div>
                    <NavLink to="/Messages/3" activeClassName={i.active}>Сергей</NavLink>
                </div>
                <div>
                    <NavLink to="/Messages/4" activeClassName={i.active}>Григорий</NavLink>
                </div>
                <div>
                    <NavLink to="/Messages/5" activeClassName={i.active}>Дмитрий</NavLink>
                </div>
            </div>
            <div className={i.middle}></div>
            <div>
                <Post message="Здравствуй, это пропс" />
                <Post message="Это вот тоже через пропс" />
                <Post message="Hello" />
                <Post message="How are you?" />
                <Post message="Some text" />
            </div>
        </div >
    )

}
export default Messages