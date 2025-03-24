document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    // Selecionar todos os botões de abrir o pop-up
    const openPopupBtns = document.querySelectorAll(".openPopupBtn");

    // Adicionar o evento de clique para cada botão
    openPopupBtns.forEach(button => {
        button.onclick = function() {
            popup.style.display = "flex";
            }
    });

    // Fechar o pop-up ao clicar no botão de fechar
    closePopupBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Fechar o pop-up ao clicar fora da janela do pop-up
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});
