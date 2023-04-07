import express  from "express";
import dayCultController from "../controller/dayCultController.js";

const router = express.Router();

router
    .get('/dayCults', dayCultController.findDayCults)
    .get('/dayCults/find', dayCultController.findOrganistForDayCult)
    .get('/dayCults/:id', dayCultController.findDayCultId)
    .post('/dayCults', dayCultController.addDayCult)
    .put('/dayCults/:id', dayCultController.updateDayCult)
    .delete('/dayCults/:id', dayCultController.deleteDayCult)    

export default router;   






