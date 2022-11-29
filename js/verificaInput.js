function verificaInput(mensagemValue) {
    let RegExpression = /^[a-z\s]*$/;
    if (!RegExpression.test(mensagemValue)) {
        return false;
    }
    return true;
}