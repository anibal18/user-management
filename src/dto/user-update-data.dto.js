import {Type} from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { name, surname} from "#Lib/dto_types.js";
 
const updatedataSchema=Type.Object({
    name,
    surname,
},{
    additionalProperties:false,
    errorMessage:{
        additionalProperties:"the amount of data sent exceeds the flieds needed for the action"
    }
})

const ajv=new Ajv({allErrors:true}).addKeyword("kind").addKeyword("modifire");
addErrors(ajv);

const validation=ajv.compile(updatedataSchema);

const updatedatavalidacion=(req , res , next)=>{
    const isdtoValid= validation(req.body)

    if(!isdtoValid){
        return res.status(400)
        .send({
            errors: validation.errors.map((error) => error.message),
        });
    }

    next();
}

export default updatedatavalidacion;