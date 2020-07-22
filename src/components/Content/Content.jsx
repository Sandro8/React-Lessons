import React from 'react';
import c from './Content.module.css';
import Messages from '../Messages/Messages';
import News from '../News/News'
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from '../Profile/Profile';

const Content = () => {
    return (
        <BrowserRouter>
            <main className="main">
                <div className={c.img}>
                    <img src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" alt="" />
                </div>
                <Route path='/Profile' component={Profile} />
                <Route path='/Messages' component={Messages} />
                <Route path='/News' component={News} />

            </main>
        </BrowserRouter>
    );
}
export default Content;