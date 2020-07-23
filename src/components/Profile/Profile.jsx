import React from 'react'
import i from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <h1 className={i.h1}>Профиль</h1>
            <div className={i.img}>
                <img src='https://xaxa-net.ru/uploads/posts/2013-09/1380030662_alkashi-foto2.jpg' alt="аватар" />
            </div>
            <p>Шариков Полиграф Полиграфович</p>
            <p>Год рождения: 1970</p>
            <p>Знак зовиака: Водколей</p>
        </div>
    )
}
export default Profile