
const listaDeCompras = [
    'pipoca',
    'pilhas',
]

// Exemplos com Arrays e Sets

test('A lista de compras tem pipoca', () => {
    expect(listaDeCompras).toContain('pipoca');
    expect(new Set(listaDeCompras)).toContain('pipoca');
});
