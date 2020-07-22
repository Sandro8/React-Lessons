import React from 'react';
import c from './Content.module.css';
import Messages from '../Messages/Messages';
import News from '../News/News'

const Content = () => {
    return (
        <main className="main">
            <div className={c.img}>
                <img src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" alt="" />
            </div>
            <Messages />
            <News />

        </main>
    );
}
export default Content;