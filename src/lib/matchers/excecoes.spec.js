
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

// Exemplos com Exceptions

test('Compilar o código android roda conforme o esperado', () => {
    
    expect(() => compileAndroidCode()).toThrow();
    
    expect(() => compileAndroidCode()).toThrow(Error);

    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');

    expect(() => compileAndroidCode()).toThrow(/JDK/);
});

/*
 Note: the function that throws an exception
 needs to be invoked within a wrapping function
 otherwise the toThrow assertion will fail. */
