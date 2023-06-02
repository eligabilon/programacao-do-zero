import express  from "express";
import sisterdayController from "../controller/sisterdayController.js";

const router = express.Router();

router
    .get('/sisterday', sisterdayController.findSisterday)
    .get('/sisterday/:id', sisterdayController.findSisterdayId)
    .post('/sisterday', sisterdayController.addSisterday)
    .put('/sisterday/:id', sisterdayController.updateSisterday)
    .delete('/sisterday/:id', sisterdayController.deleteSisterday)    

export default router;   