import express from "express";
import customers from "./customerRoutes.js";
import users from "./userRoutes.js";
import churchs from "./churchRoutes.js";
import daysCults from "./dayCultsRoutes.js";
import sisterday from "./sisterdayRoutes.js";
import login from "./loginRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Aplicacao rodando...');
    })

    app.use(express.json(), customers, users, churchs, daysCults, sisterday, login);
}

export default routes;