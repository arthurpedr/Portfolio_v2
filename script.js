// Header com movimentação 
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo -> Oculta o header
        header.classList.add("hidden");
    } else {
        // Rolando para cima -> Mostra o header
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
});

// Seleciona todos os links do menu que possuem a classe "scroll-link"
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Aguarda o carregamento do DOM antes de adicionar o evento ao formulário
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("meuFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const form = this;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                document.getElementById("mensagemSucesso").textContent = "Mensagem enviada com sucesso!";
                document.getElementById("mensagemSucesso").style.display = "block";
                form.reset(); // Limpa o formulário
            } else {
                document.getElementById("mensagemSucesso").textContent = "Erro ao enviar a mensagem.";
                document.getElementById("mensagemSucesso").style.color = "red";
                document.getElementById("mensagemSucesso").style.display = "block";
            }
        }).catch(error => {
            console.error("Erro:", error);
            document.getElementById("mensagemSucesso").textContent = "Erro inesperado.";
            document.getElementById("mensagemSucesso").style.color = "red";
            document.getElementById("mensagemSucesso").style.display = "block";
        });
    });
});

// modal do Tradutor
const modal = document.getElementById("About-modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

// Quando clicar no botão, exibe o modal
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Quando clicar no "X", fecha o modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal se clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//Funçoes do menu para mobile
function HideMenu() {
    const menu = document.getElementById("tags"); // Pegando o menu
    const scrollLinks = document.getElementsByClassName("scroll-link");
    const tag = document.getElementsByClassName("tags"); // Pegando todos os links

    menu.style.display = "block"; // Garante que o menu esteja visível

    // Adiciona um evento de clique a cada link do menu
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", function () {
            menu.style.display = "none"; // Esconde o menu ao clicar no link
        });
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("tags");

    // Evento para fechar o menu ao clicar dentro do menu, mas fora das <li>
    menu.addEventListener("click", function (event) {
        if (event.target === menu) { // Verifica se o clique foi diretamente no <ul>
            menu.style.display = "none"; // Esconde o menu
        }
    });
});

function abrirProjeto(url) {
    window.open(url, '_blank');
}

function abrirLink(url) {
    window.open(url, '_blank');
}

// button dark mode
const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        toggleTheme.textContent = '🌞';
    } else {
        toggleTheme.textContent = '🌙';
    }
});