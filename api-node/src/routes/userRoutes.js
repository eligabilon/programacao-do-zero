import express  from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router
    .get('/users', userController.buscarUsers)
    .get('/users/:id', userController.buscarUserId)
    .post('/users', userController.cadastrarUser)
    .put('/users/:id', userController.atualizarUser)
    .delete('/users/:id', userController.deletarUser)    

export default router;   






