const randomStrings = require('../index')

describe('Pruebas al random string', () => {
    
    test ('Probar random Index', () => {
        expect(typeof randomStrings()).toBe('string')
    })
    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch('Buenos Aires')
    })

})