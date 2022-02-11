import './Card.css'
import React from 'react'

const Card = (props) => {
    const { titulo, color } = props
    const cardStyle = {
        backgroundColor: color || "purple",
        borderColor: color || "purple"
    }
    return (
        <div className='Card' style={cardStyle}>
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