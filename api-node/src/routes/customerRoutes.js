import express  from "express";
import customerController from "../controller/customerController.js";

const router = express.Router();

router
    .get('/customers', customerController.findCustomers)
    .get('/customers/find', customerController.findCustomerForChurch)
    .get('/customers/:id', customerController.findCustomerId)
    .get('/customers/find/:id', customerController.findCustomerIdMoreChurch)
    .post('/customers', customerController.addCustomer)
    .put('/customers/:id', customerController.updateCustomer)
    .delete('/customers/:id', customerController.deleteCustomer)    

export default router;   






