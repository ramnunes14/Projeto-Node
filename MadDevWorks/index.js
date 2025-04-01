import express from "express"; 
const app = express();
import path from 'path'; 
import { fileURLToPath } from 'url'; 
import homeRoutes from "./routes/homeRoutes.js";
import portfolio from "./routes/portfolio.js";
import contatoRoutes from "./routes/contatoRoutes.js";
import errorRoutes from "./routes/404Routes.js"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({ extended: true }));


app.use("/", homeRoutes);
app.use("/portfolio", portfolio);
app.use("/contato", contatoRoutes);

app.use(errorRoutes);

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Server listening on PORT", 3000);
    }
});

    
      