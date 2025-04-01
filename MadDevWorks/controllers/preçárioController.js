import pages from "../models/menu.js";  

const getPrec = (req, res) => {
    const caminho = "Preçário";
    res.render("preçário", { 
        pages,
        caminho
    });
};

export { getPrec };
