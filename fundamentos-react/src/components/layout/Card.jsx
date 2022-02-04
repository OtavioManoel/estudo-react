import './Card.css'
import React from 'react'

const Card = (props) => {
    const { titulo } = props
    return (
        <div className='Card'>
            <div className='Title'>
                {titulo}
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    );
}

export default Card;