
// Exemplos com Verdadeiro e Falso

it('numero não deveria ser considerado null', () => {
    const n = 0;

    expect(n).not.toBeNull();
});

it('numero não deveria ser considerado undefined', () => {
    const n = 0;

    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
});

it('numero deveria ser considerado false', () => {
    const n = 0;

    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
});

/* 
 You should use the matcher that 
 most precisely corresponds
 to what you want your code to be doing. */
