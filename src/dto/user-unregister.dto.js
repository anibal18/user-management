import {Type} from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors"
import { email, password } from "#Lib/dto_types.js";

const unregisterschema=Type.Object({
    password
},{
    additionalProperties:false,
    errorMessage:{
        additionalProperties:"the amount of data sent exceeds the fields needed for the action"
    }
})

const ajv=new Ajv({allErrors:true}).addKeyword("kind").addKeyword("modifire");
ajv.addFormat("password" , /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

const validation= ajv.compile(unregisterschema);

const unregister=(req , res ,next)=>{
    const isdtoValid=validation(req.body);
    if(!isdtoValid){
        return res.status(400).send({
            errors:validation.errors.map((error)=>{error.message})
        });

    }
    next();
}

export default unregister;