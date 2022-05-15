import React from 'react'
import { fetchData, fetchDataPromises } from '../api/fetchData';
import '@styles/global.scss'

const App = () => {
    React.useEffect(() => {
        async function getData() {
            try {
                const data = await fetchData()
                console.log(data)
            } catch (error) {
                console.error('Get Data error', error)
            }
        }
        getData()
    }, [])
    return (
        <h1>Hola</h1>
    );
};

export default App;