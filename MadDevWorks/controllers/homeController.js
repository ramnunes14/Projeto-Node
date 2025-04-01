import pages from "../models/menu.js";  // Importando o array de páginas

const getIndex = (req, res) => {
    const caminho = "Início";
    res.render("index", { 
        pages,
        caminho
    });
};

export { getIndex };
