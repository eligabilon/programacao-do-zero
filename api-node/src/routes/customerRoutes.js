import express  from "express";
import customerController from "../controller/customerController.js";

const router = express.Router();

router
    .get('/customers', customerController.buscarCustomers)
    .get('/customers/:id', customerController.buscarCustomerId)
    .post('/customers', customerController.cadastrarCustomer)
    .put('/customers/:id', customerController.atualizarCustomer)
    .delete('/customers/:id', customerController.deletarCustomer)    

export default router;   






