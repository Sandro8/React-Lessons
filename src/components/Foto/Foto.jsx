import React from 'react'
import i from './Foto.module.css'

const Foto = (props) => {
    return (
        <div>
            <img className={i.image} src='https://i.pinimg.com/564x/0f/33/6e/0f336ed97c97da11efdd8dcd7267ebe0.jpg' alt="" /><br />
            <img className={i.image} src='https://cdn.fishki.net/upload/post/2020/03/06/3248750/1.jpg' alt="" /><br />
            <img className={i.image} src='https://i.pinimg.com/236x/3d/99/89/3d9989c7f2de8d339eaf7d723ff582bb.jpg' alt="" /><br />
            <img className={i.image} src='https://cdn.fishki.net/upload/post/2019/09/18/3089789/9-1.jpg' alt="" /><br />
        </div >
    )
}
export default Foto;