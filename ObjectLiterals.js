// Object Literal + Destructuring Object + Template Tilerals
function adressMaker(adress) {

    const {
        city: city,
        state: state
    } = adress

    const newAdress = {
        city,
        state,
        continent: 'Europe'
    }
    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.continent}`)
}

adressMaker({city: 'Niki Town', state: 'France'})