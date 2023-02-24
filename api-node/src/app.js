import express from "express";
import cors from "cors";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, 'ERRO de conexao'))
db.once('open', ()=>{
    console.log('Conexao com sucesso');
})

const app = express();
app.use(cors());

app.use(express.json());

routes(app);

export default app