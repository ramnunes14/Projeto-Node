document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const openPopupBtns = document.querySelectorAll(".openPopupBtn");
    const popupTitulo = document.querySelector(".popup-content h2");
    const popupDescricao = document.createElement("p");
    const popupImagem = document.createElement("img");
    const popupContent = document.querySelector(".popup-content");
    popupContent.appendChild(popupImagem);
    popupContent.appendChild(popupDescricao);
    openPopupBtns.forEach(button => {
        button.onclick = function() {
            const titulo = this.getAttribute("data-titulo");
            const descricao = this.getAttribute("data-descricao");
            const imagem = this.getAttribute("data-imagem");
            popupTitulo.textContent = titulo;
            popupDescricao.textContent = descricao;
            popupImagem.src = imagem;
            popupImagem.alt = titulo;
            popupImagem.style.width = "100%"; 
            popup.style.display = "flex";
        }
    });

    
    closePopupBtn.onclick = function() {
        popup.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    }
});
