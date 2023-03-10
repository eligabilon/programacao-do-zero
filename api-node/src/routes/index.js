import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";
import customers from "./customerRoutes.js";
import users from "./userRoutes.js";
import churchs from "./churchRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Aplicacao rodando...');
    })

    app.use(express.json(), books, authors, customers, users, churchs);
}

export default routes;