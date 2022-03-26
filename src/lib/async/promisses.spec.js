
const fetchData = () => {
    return new Promise((resolve) => {
        resolve('Pitchulinhas');
    });
}

const fetchDataWithError = () => {
    return new Promise((resolve, reject) => {
        reject('error');
    });
}

// Exemplo com Promisses

test('A resposta é Pitchulinhas', () => {
    /* fetchData().then(data => {
        expect(data).toBe('Pitchulinhas');
    }); */
    return fetchData().then(data => {
        expect(data).toBe('Pitchulinhas');
    });
});

test('A função fetchDataWithError falha com erro', () => {
    expect.assertions(1);
    return fetchDataWithError().catch(e => expect(e).toMatch('error'));
});

// Mesmas Promisses, SÓ Q agora com Async e Await

test('A resposta é Pitchulinhas', async () => {
    const data = await fetchData();
    expect(data).toBe('Pitchulinhas');
});

test('A função fetchDataWithError falha com erro', async () => {
    expect.assertions(1);
    try {
        await fetchDataWithError();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
