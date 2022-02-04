import './index.css';
import React from 'react';
import Card from './components/layout/Card';

import Aleatorio from './components/basicos/Aleatorio';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

const App = () => {
    return (
        <div>
            <Card titulo='Aletorio'>
                <Aleatorio
                    min={1}
                    max={78}
                />
            </Card>
            <Card titulo='Com Parametro'>
                <ComParametro
                    titulo='Ola'
                    subtitulo='Mundo Cruel'
                />
            </Card>

            <Card titulo='Primeiro'>
                <Primeiro />
            </Card>
        </div>
    );
}

export default App;