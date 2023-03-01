import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import customers from "./customerRoutes.js";
import users from "./userRoutes.js";
import churchs from "./churchRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Aplicacao rodando...');
    })

    app.use(express.json(), livros, autores, customers, users, churchs);
}

export default routes;