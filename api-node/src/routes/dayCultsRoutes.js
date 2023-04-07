import express  from "express";
import dayCultController from "../controller/dayCultController.js";

const router = express.Router();

router
    .get('/days_cults', dayCultController.findDayCults)
    .get('/days_cults/find', dayCultController.findOrganistForDayCult)
    .get('/days_cults/:id', dayCultController.findDayCultId)
    .post('/days_cults', dayCultController.addDayCult)
    .put('/days_cults/:id', dayCultController.updateDayCult)
    .delete('/days_cults/:id', dayCultController.deleteDayCult)    

export default router;   






