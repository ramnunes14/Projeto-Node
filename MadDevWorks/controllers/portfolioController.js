import projetos from "../models/projetos.js";
import pages from "../models/menu.js";

const getPortfolio = (req, res) => {
    const caminho = "Portfolio";
    res.render("portfolio", { projetos, pages, caminho }); 
};

export { getPortfolio };
