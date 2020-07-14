import React from 'react';
import './Content.module.css';
import Post from '../Posts/post';

const Content = () => {
    return (
        <main className="main">
            <div>
                <img src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" alt="" />
            </div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    );
}
export default Content;