import {Type} from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors"
import { email, password } from "#Lib/dto_types.js";

const updatedatapasswordschema=Type.Object({
    oldpassword:password,
    newpassword:password
},{
    additionalProperties:false,
    errorMessage:{
        additionalProperties:"The amount of data sent exceeds the fields needed for the action"
    }
})

const ajv=new Ajv({allErrors:true}).addKeyword("kind").addKeyword("modifire");
ajv.addFormat("password" , /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

const validation= ajv.compile(updatedatapasswordschema);

const updatedatapassword=(req , res ,next)=>{
    const isdtoValid=validation(req.body);
    if(!isdtoValid){
        return res.status(400).send({
            errors:validation.errors.map((error)=>{error.message})
        });

    }
    next();
}

export default updatedatapassword;
