import React from 'react'
import n from './News.module.css'

const News = (props) => {
    return (
        <div className={n.p}>
            <p>Новости</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iure.</p>
            <p>Это все новости на сегодня</p>
        </div>
    )
}
export default News