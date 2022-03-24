import React from 'react'

const useInitialState = () => {
    const API = process.env.API
    const [state, setState] = React.useState({
        people: [],
        films: [],
        species: [],
        planets: [],
        starships: []
    })
    const urlAPIs = [`${API}people/`, `${API}films/`, `${API}species/`, `${API}planets/`, `${API}starships/`]
    React.useEffect(() => {
        Promise.all(urlAPIs.map(url => fetch(url)))
        .then(results => Promise.all(results.map(response => response.json())))
        .then((data) => {
            setState({...state, people: data[0].results})
            setState({...state, films: data[1].results})
            setState({...state, species: data[2].results})
            setState({...state, planets: data[3].results})
            setState({...state, starships: data[4].results})
        })
    }, [])
    return state
}
export {useInitialState}