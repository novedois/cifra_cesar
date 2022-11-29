function descriptografa() {
    let mensagemValue = mensagem.value;

    if(mensagemValue.length == 0) {
        retorno.value = "Por favor, digite alguma coisa no campo mensagem!";
        return;
    }
    
    if(!verificaInput(mensagemValue)) {
        retorno.value = "Por favor, digite apenas letras minúsculas!";
        return;
    }

    let chaveValue = chave.value;

    if(chaveValue <= 0 || chaveValue > 26) {
        retorno.value = "Por favor, digite um número entre 1 e 26!";
        return;
    }

    let arrayMensagem = [];
    let novaMensagem = [];
    let novaMensagemPlus = [];

    for(let i = 0; i < mensagemValue.length; i++) {
        let letra = mensagemValue[i];
        if(alfabeto.includes(letra)) {
            arrayMensagem.push(letra);
            novaMensagem.push((alfabeto.indexOf(letra) +  (26 - parseInt(chaveValue))) % 26);
        }
        else {
            novaMensagem.push(mensagemValue[i])
        }
    }

    for (let i = 0; i < novaMensagem.length; i++) {
        if(Number.isInteger(novaMensagem[i])) {
            let letra = novaMensagem[i];
            novaMensagemPlus.push(alfabeto[letra]);
        }
        else {
            novaMensagemPlus.push(" ");
        }
    }

    retorno.value = novaMensagemPlus.join("");
}