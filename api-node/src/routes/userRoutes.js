import express  from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router
    .get('/users', userController.findUsers)
    .get('/users/:id', userController.findUserId)
    .post('/users', userController.addUser)
    .put('/users/:id', userController.updateUser)
    .delete('/users/:id', userController.deleteUser)    

export default router;   






