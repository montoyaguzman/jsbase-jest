const cities = [
    'Guadalajara',
    'Tlaxcala',
    'CDMX',
    'Pachuca',
    'Monterrey',
    'Mérida,'
]

const randomCity = () => {
    const str = cities[Math.floor(Math.random() * cities.length)]
    return str
}

module.exports = randomCity