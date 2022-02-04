import React from "react";

const Aleatorio = (props) => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <p>
                <strong> Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong> Valor Maximo: </strong> {max}
            </p>
            <p>
                Valor escolhido: <strong> {aleatorio} </strong>
            </p>
        </div>
    )
}

export default Aleatorio