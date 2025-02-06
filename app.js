//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome === '') {
        alert("Por favor, insira um nome!");
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert("Este nome já existe, favor inserir outro amigo.");
    } else {
        listaAmigos.push(nome);
        exibirLista();
    }
    limparCampo();
}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista exibida antes de atualizar
    listaAmigos.forEach(function(nome) {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function apagarLista() {
    listaAmigos = []; // Limpa o array
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Remove os elementos da lista do HTML
}

function limparCampoRemocao() {
    let nomeParaApagar = document.getElementById('inputNomeApagar');
    nomeParaApagar.value = '';
}

function apagarNome() {
    let nomeParaApagar = document.getElementById('inputNomeApagar').value;
    let index = listaAmigos.indexOf(nomeParaApagar);
    if (index !== -1) {
        listaAmigos.splice(index, 1); // Remove o nome da lista
        exibirLista(); // Atualiza a lista exibida
        limparCampoRemocao();
    } else {
        alert("Nome não encontrado na lista.");
    }
}