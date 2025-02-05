//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome === '') {
        alert("Por favor, insira um nome!");
    }
    if(listaAmigos.includes(nome, [0])){
        alert("Este nome já existe, favor inserir outro amigo.");
    } else{
        listaAmigos.push(nome);
        exibirNome(nome);
    }
    limparCampo();
}

function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = ' ';
}

function exibirNome(nome) {
    let lista = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
}

function apagarLista() {
    listaAmigos = []; // Limpa o array
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Remove os elementos da lista do HTML
}