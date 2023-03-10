import express  from "express";
import authorsController from "../controller/authorsController.js";

const router = express.Router();

router
    .get('/authors', authorsController.findAuthors)
    .get('/authors/:id', authorsController.findAuthorId)
    .post('/authors', authorsController.addAuthor)
    .put('/authors/:id', authorsController.updateAuthor)
    .delete('/authors/:id', authorsController.deleteAuthor)    

export default router;    


    


