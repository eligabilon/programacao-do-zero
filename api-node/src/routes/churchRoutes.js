import express  from "express";
import ChurchController from "../controller/churchsController.js";

const router = express.Router();

router
    .get('/churchs', ChurchController.buscarChurchs)
    .get('/churchs/:id', ChurchController.buscarChurchId)
    .post('/churchs', ChurchController.cadastrarChurch)
    .put('/churchs/:id', ChurchController.atualizarChurch)
    .delete('/churchs/:id', ChurchController.deletarChurch)    

export default router;    


    


