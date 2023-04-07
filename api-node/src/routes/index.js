import express from "express";
import customers from "./customerRoutes.js";
import users from "./userRoutes.js";
import churchs from "./churchRoutes.js"
import daysCults from "../models/DaysCults.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Aplicacao rodando...');
    })

    app.use(express.json(), customers, users, churchs, daysCults);
}

export default routes;