import express from "express";
import morgan from "morgan";

//Routes
import languageRoutes from "./language.routes"

// tengo una aplicacion creada con el framework express 
const app = express();

//Settings 
app.set("port",4000);

//Middlewares 
app.use(morgan("dev"));
app.use(express.json());

//Routes 
app.use("/api/languages",languageRoutes);

export default app;