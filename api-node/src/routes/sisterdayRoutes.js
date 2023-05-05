import express  from "express";
import SisterdayController from "../controller/sisterdayController.js";

const router = express.Router();

router
    .get('/sisterday', SisterdayController.findSisterday)
    .get('/sisterday/:id', SisterdayController.findSisterdayId)
    .post('/sisterday', SisterdayController.addSisterday)
    .put('/sisterday/:id', SisterdayController.updateSisterday)
    .delete('/sisterday/:id', SisterdayController.deleteSisterday)    

export default router;   