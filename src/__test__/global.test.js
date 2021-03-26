const text = 'Hola Mundo'
const fruits = ['manzana', 'banana', 'mango']
const reverseStr = (str, callback) => {
    callback(str.split('').reverse().join(''))
}
const reverseStr2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}

test('Contiene "Mundo" ', () => {
    expect(text).toMatch(/Mundo/)
})

test('exist banana?', () => {
    expect(fruits).toContain('banana')
})

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9)
})

test('istrue', () => {
    expect(true).toBeTruthy()
})

test('Probar un callback', () => {
    reverseStr('hola', (str) => {
        expect(str).toBe('aloh')
    })
})

test('Proar un promise', () => {
    return reverseStr2('hola')
        .then(response => {
            expect(response).toBe('aloh')
        })
})

test('Probar con async', async () => {
    const string = await reverseStr2('hola')
    expect(string).toBe('aloh')
})

/*
beforeAll(() => console.log(' === iniciando suite ==='))

beforeEach(() => console.log(' === antes de cada prueba ==='))
afterEach(() => console.log(' === despues de cada prueba ==='))

afterAll(() => console.log(' === suite terminada ==='))
*/
