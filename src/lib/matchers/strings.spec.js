
// Exemplos de Match com Strings

test('Não existe Eu em Equipe', () => {
    expect("Equipe").not.toMatch(/Eu/);
});

test('Cant spell "awesome" without "me"', () => {
    expect("awesome").toMatch(/me/);
});

test('Ninguém escreve américa sem érica', () => {
    expect("américa").toMatch(/érica/);
});
