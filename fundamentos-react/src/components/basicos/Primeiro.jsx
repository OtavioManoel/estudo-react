import React from 'react';

export default function Primeiro () {
    const mensagem = 'Ola primada'
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>
                {mensagem}
            </p>
        </div>
    );
}