import express  from "express";
import ChurchController from "../controller/churchsController.js";

const router = express.Router();

router
    .get('/churchs', ChurchController.findChurchs)
    .get('/churchs/:id', ChurchController.findChurchId)
    .post('/churchs', ChurchController.addChurch)
    .put('/churchs/:id', ChurchController.updateChurch)
    .delete('/churchs/:id', ChurchController.deleteChurch)    

export default router;
