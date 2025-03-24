import pages from "../models/menu.js";  



const getExemplos = (req, res) => {
    
    const caminho = "Exemplos de sites";
    res.render("exemplos", { 
        pages,
        caminho
    });
};

export { getExemplos };