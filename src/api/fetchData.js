const API = process.env.API
const urlAPIs = [`${API}people/`, `${API}films/`, `${API}species/`, `${API}planets/`, `${API}starships/`]

const fetchData = async() => {
    try {
        const information = await Promise.all(urlAPIs.map(url => fetch(url)))
        const results = await Promise.all(information.map(item => item.json()))
        return results.map(item => item.results)
    } catch (error) {
        console.error('Error Fetching', error)
    }
}

const fetchDataPromises = () => {
    return Promise.all(urlAPIs.map(url => fetch(url)))
        .then(information => Promise.all(information.map(item => item.json())))
        .then(data => {
            return data.map(item => item.results)
        })
        .catch(error => console.error('Fetching Data Error', error))
}

export { fetchData, fetchDataPromises }