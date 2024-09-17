// 1 - Respodendo a eventos
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    alert("Você clicou no botão");
});

//2 - Acessando elementos do DOM
const paragrafo = document.getElementById('paragrafo');
const mudarTexto = document.getElementById('mudar-texto');

mudarTexto.addEventListener('click', () => {
    paragrafo.textContent = "O texto foi alterado!";
});2

//3 - Manipulação do CSS
const estiloExemplo = document.getElementById('estilo-exemplo');
const mudarEstilo = document.getElementById('mudar-estilo');
const adicionarEstilo = document.getElementById('adicionar-estilo');
const removerEstilo = document.getElementById('remover-estilo');
const alternarEstilo = document.getElementById('alternar-estilo');

mudarEstilo.addEventListener('click', () => {
    estiloExemplo.style.color = 'blue';
    estiloExemplo.style.fontSize = '20px';
    estiloExemplo.style.backgroundColor = '#fcfcfc';
});

adicionarEstilo.addEventListener('click', () => {
    estiloExemplo.classList.add('novo-estilo');
});

removerEstilo.addEventListener('click', () => {
    estiloExemplo.classList.remove('novo-estilo');
});
alternarEstilo.addEventListener('click', () => {
    estiloExemplo.classList.toggle('novo-estilo');
});

//4 - Adicionar elemento no DOM
const adicionarElemento = document.getElementById('adicionar-elemento');

adicionarElemento.addEventListener('click', () => {
    const elemento = document.createElement('p');
    elemento.textContent = "Este é um elemento adicionado pelo JS!";
    adicionarElemento.parentElement.appendChild(elemento);
});

//5 - Remover elemento no DOM
const removerParagrafo = document.getElementById('remover-paragrafo');

remover.addEventListener('click', () => {
    removerParagrafo.remove();
});

//6 - Contador
const visorContador = document.getElementById('visor-contador');
const aumentar = document.getElementById('aumentar');
const diminuir = document.getElementById('diminuir');

let valorContador = 0;

aumentar.addEventListener('click', () => {
    valorContador++;
    visorContador.textContent = valorContador;
});

diminuir.addEventListener('click', () => {
    valorContador--;
    visorContador.textContent = valorContador;
});
