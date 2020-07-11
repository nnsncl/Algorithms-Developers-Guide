// Destructuring Objects
const userInformation = {
    firstName: 'Nu',
    lastName: 'Ni',
    city: 'Paris',
    country: 'France'
}

const {firstName: fn, lastName: ln} = userInformation

console.log(`${fn} ${ln}`)