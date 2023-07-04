import usermodel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userupdateemail=async (req , res )=>{
    const id=req.id;
    const {email , password}=req.body;

    const validation_id= await usermodel.findById(id).exec()

    if(!validation_id){
        return res.status(409).send({errors:["Error, the user is already registered"]})
    }

    const checkpassword=await compare(password , validation_id.password);
    if (! checkpassword){
        return res.status(401).send({ errors: ['Incorrect credentials'] });
    }
   

    validation_id.email=email;

    validation_id.save()

    return res.send("Update email")
}

export default userupdateemail;