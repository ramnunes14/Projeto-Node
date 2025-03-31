import express from "express"; 
const app = express();
import path from 'path'; 
import { fileURLToPath } from 'url'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({ extended: true }));
import homeRoutes from "./routes/homeRoutes.js";
app.use("/", homeRoutes);
import portfolio from "./routes/portfolio.js";
app.use("/portfolio", portfolio);
import contatoRoutes from "./routes/contatoRoutes.js";
app.use("/contato", contatoRoutes);
app.listen(3000, (err) => {
    if (err)
    console.error(err);
    else
    console.log("Server listening on PORT", 3000);
    });

    
      