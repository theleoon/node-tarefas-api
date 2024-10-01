import express from "express";
import { adminHandler } from "./adminHandler.js";

// https://expressjs.com/en/api.html#req.path

const middlewares = (app) => {

app.use((req, res, next) => {
  console.log('Passando pelo 1 Middleware Global');
  console.log(`Método: ${req.method} 
    | URL: ${req.url} 
    | Hostname: ${req.hostname}
    | IP: ${req.ip}`);
  console.log(`Body: ${req.body}`);
  next();
});

app.use((req, res, next) => {
  console.log('Passando pelo 2 Middleware Global');
  next();
});

  app.get("/admin", adminHandler);
};

export default middlewares;