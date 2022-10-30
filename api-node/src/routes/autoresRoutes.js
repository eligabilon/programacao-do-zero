import express  from "express";
import autoresController from "../controller/autoresController.js";

const router = express.Router();

router
    .get('/autores', autoresController.buscarAutores)
    .get('/autores/:id', autoresController.buscarAutorId)
    .post('/autores', autoresController.cadastrarAutor)
    .put('/autores/:id', autoresController.atualizarAutor)
    .delete('/autores/:id', autoresController.deletarAutor)    

export default router;    


    


