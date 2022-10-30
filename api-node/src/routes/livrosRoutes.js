import express  from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router();

router
    .get('/livros', LivroController.buscarLivros)
    .get('/livros/busca', LivroController.buscarLivroPorEditora)
    .get('/livros/:id', LivroController.buscarLivroId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro)    

export default router;    


    


