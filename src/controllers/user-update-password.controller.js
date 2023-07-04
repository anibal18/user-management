import usermodel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userupdatepassword=async (req , res)=>{
    const id=req.id;
    const {oldpassword , newpassword}=req.body;

    const existingUserById = await usermodel.findById(id).exec();

    if (!existingUserById){
        return res.status(401).send({ errors: ['unauthorized user'] });
    };

    const checkPassword = await compare(oldpassword, existingUserById.password);

    if (!checkPassword){
        return res.status(401).send({ errors: ['Incorrect credentials'] })
    };

    const hashedPassword = await hash(newpassword, SALT);

    existingUserById.password = hashedPassword;

    await existingUserById.save();

    return res.send('Update password');
    
}

export default userupdatepassword;