import usermodel from "#Schemas/user.schema.js";

import { hash } from "bcrypt";


const userregistercontroller=async (req , res , next)=>{
    const{_id , name , surname , email , password}=req.body;

    const validation_id= await usermodel.findById(_id).exec();

    if(validation_id){
        return res.status(409).send({errors:["Error , the user is already registered"]});
    }

    const validacion_email=await usermodel.findOne({email}).exec();

    if(validacion_email){
        return res.status(409).send({error:["Error , the user is already registered"]});

    }

    const hasedpassword= await hash(password, 12);

    const user=new usermodel({
        _id,
        name, 
        surname,
        email,
        password:hasedpassword
    });

    user.save();

    return res.status(201).send("user registered succefuly.")
}


export default userregistercontroller;

