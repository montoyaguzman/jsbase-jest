const text = 'Hola Mundo'
const fruits = ['manzana', 'banana', 'mango']
const reverseStr = (str, callback) => {
    callback(str.split('').reverse().join(''))
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


