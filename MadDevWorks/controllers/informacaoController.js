import info from "../models/info.js";
import pages from "../models/menu.js";  // Importando o array de páginas
const getInfo = (req, res) => {
    const caminho = "Contato";
    res.render("contato", { info, pages, caminho }); 
};

export { getInfo };