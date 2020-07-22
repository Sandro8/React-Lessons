import React from 'react';
import './Messages.module.css'
import Post from '../Posts/post';

const Messages = (props) => {
    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
            <Post message="Здравствуй, это пропс" />
            <Post message="Это вот тоже через пропс" />
            <Post message="Hello" />
            <Post message="How are you?" />
            <Post message="Some text" />
        </div>
    )

}
export default Messages