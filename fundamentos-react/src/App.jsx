import './App.css';
import React from 'react';
import Card from './components/layout/Card';

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

const App = () => {
    return (
        <div className='App'>
            <h1>
                Fundamentos
            </h1>

            <div className="Cards">
                <Card titulo='Desafio 02'>
                    <TabelaProdutos />
                </Card>
                <Card titulo="Repetição" color="cornflowerblue" >
                    <ListaAlunos />
                </Card>
                <Card titulo='Componente com filhos' color='red'>
                    <Familia sobrenome='Miranda'>
                        <FamiliaMembro nome='Otavio' />
                        <FamiliaMembro nome='Vitor' />
                        <FamiliaMembro nome='Igor' />
                    </Familia>
                </Card>
                <Card titulo='Aletorio' color='#080'>
                    <Aleatorio
                        min={1}
                        max={78}
                    />
                </Card>
                <Card titulo='Com Parametro' color='pink'>
                    <ComParametro
                        titulo='Ola'
                        subtitulo='Mundo Cruel'
                    />
                </Card>

                <Card titulo='Primeiro' color='blue'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}

export default App;