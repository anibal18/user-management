import {Router} from "express";
import userregisterDTO from "#Dto/user-register.dto.js";
import userloginDTO from "#Dto/user-login.dto.js";
import updatedatavalidacion from "#Dto/user-update-data.dto.js";
import updatedataemail from "#Dto/user-update-email.dto.js";
import updatedatapassword from "#Dto/user-update-password.dto.js";
import userJWTDTO from "#Dto/user-jwt.dto.js";
import userregistercontroller from "#Controllers/user-register.controller.js";
import userlogincontroller from "#Controllers/user-login.controller.js";
import userprofilecontroller from "#Controllers/user-profile.controller.js";
import userupdatedata from "#Controllers/user-update-data.controller.js";
import userupdateemail from "#Controllers/user-update-email.controller.js";
import userUnregisterController from "#Controllers/user-unregister.controller.js";

const routeuser=Router()

routeuser.post("/register",userregisterDTO,userregistercontroller);
routeuser.post("/login" , userloginDTO , userlogincontroller); 
routeuser.get("/profile" ,userJWTDTO,userprofilecontroller);
routeuser.patch("/update-data",userJWTDTO, updatedatavalidacion ,userupdatedata);
routeuser.patch("/update-email" , userJWTDTO,updatedataemail ,userupdateemail);
routeuser.patch("/update-password",userJWTDTO,updatedatapassword);
routeuser.delete("/unregister",userJWTDTO,userUnregisterController);
 
export default routeuser;