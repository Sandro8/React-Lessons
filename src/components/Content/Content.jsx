import React from 'react';
import c from './Content.module.css';
import Post from '../Posts/post';

const Content = () => {
    return (
        <main className="main">
            <div className={c.img}>
                <img src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" alt="" />
            </div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
            <Post message="Здравствуй, это пропс" />
            <Post message="Это вот тоже через пропс" />
            <Post message="Hello" />
            <Post message="How are you?" />
            <Post message="Some text" />
        </main>
    );
}
export default Content;