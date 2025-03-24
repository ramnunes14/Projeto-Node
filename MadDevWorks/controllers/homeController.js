import pages from "../models/menu.js";  // Importando o array de páginas


// Função para renderizar a home page
const getIndex = (req, res) => {
    // Aqui você pode passar os dados para o template EJS
    const caminho = "Início";
    res.render("index", { 
        pages,
        caminho
    });
};

export { getIndex };
