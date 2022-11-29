let alfabeto = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' 
];

// Seleciona inputs
let mensagem = document.querySelector('#texto');
let chave = document.querySelector('#chave');
let retorno = document.querySelector('#descriptografada');

// Seleciona os botões
let botaoCriptografar = document.querySelector('#botao_criptografar');
let botaoDescriptografar = document.querySelector('#botao_descriptografar');
let botaoCopiar = document.querySelector('#copiar');

botaoCriptografar.addEventListener('click', criptografa);
botaoDescriptografar.addEventListener('click', descriptografa);
botaoCopiar.addEventListener('click', copiaTexto);