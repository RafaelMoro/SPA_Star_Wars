import React from 'react'
import '@styles/global.scss'
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
    const state = useInitialState()
    return (
        <h1>Hola</h1>
    );
};

export default App;