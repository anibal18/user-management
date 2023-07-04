import routeuser from "#Routes/user.routes.js";
import  express  from "express";

const expressApp=express();

//middlewares

expressApp.use(express.json());


//routes

expressApp.use("/user" , routeuser)



export default expressApp;