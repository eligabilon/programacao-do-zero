import express  from "express";
import BooksController from "../controller/booksController.js";

const router = express.Router();

router
    .get('/books', BooksController.findBooks)
    .get('/books/find', BooksController.findBookForPublisher)
    .get('/books/:id', BooksController.findBookId)
    .post('/books', BooksController.addBook)
    .put('/books/:id', BooksController.updateBook)
    .delete('/books/:id', BooksController.deleteBook)    

export default router;    


    


