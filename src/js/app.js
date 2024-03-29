/* Objetivo 1- Quando o usuário clicar no botão de seleção de plataformas,
deve abrir uma caixa com os botões de seleção de plataforma.

    Passo 1 - Pegar o botão de seleção de plataforma no JS,
    para poder verificar quando o usuário clicar em cima dele.

    Passo 2 - Pegar o elemento do conteudo que precisa ser mostrado.

    passo 3 -Pegar o click do usuário no JS

    Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataforma
    dentro do botão para que o conteúdo dele apareça.
    
Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo,
quando o usuário clicar no botão fechar, o conteudo deve ser escondido.

    Passo 1 - Verificar se o botão já está aberto, se sim, 
    devemos renovar a classe active para que ele esconda o conteúdo novamente.

*/ 

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});