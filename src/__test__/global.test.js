const text = 'Hola Mundo'

test('Contiene "Mundo" ', () => {
    expect(text).toMatch(/Mundo/)
})