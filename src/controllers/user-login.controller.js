 import usermodel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";
import { SignJWT } from "jose";

const userlogincontroller= async (req,res)=>{
    const {email , password}=req.body;

    const validation_email= await usermodel.findOne({email}).exec();

    if(!validation_email){
        return res.status(401).send({errors:["Incorrect credentials"]})
    }
 
    const checkpassword= await compare(password , validation_email.password);

    if (!checkpassword)
    return res.status(401).send({ errors: ['Incorrect credentials'] });

    const jwtconstructor = new SignJWT({id:validation_email._id});

    const encoder = new TextEncoder();

    const jwt=await jwtconstructor.setProtectedHeader({
        alg:'HS256',
         typ: 'JWT',
    }).setIssuedAt().setExpirationTime('7d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    return res.send( {jwt} );
}


export default userlogincontroller