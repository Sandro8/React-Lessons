import React from 'react';
import P from './post.module.css';

const Post = (props) => {
    return (
        <div className={P.Post}>
            <div className={P.img}>
                <img src="https://c7.hotpng.com/preview/232/131/798/iphone-emoji-apple-ios-11-emojis.jpg" alt="" />
            </div>
            <div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}
export default Post;