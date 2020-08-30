fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result)
    })