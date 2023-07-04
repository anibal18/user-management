import usermodel from '#Schemas/user.schema.js';


const userprofilecontroller= async (req , res)=>{
    const{id}=req;

    const validation_id=await usermodel.findById(id).exec();
    if (!validation_id)
    return res.status(401).send({ errors: ['unauthorized user'] });

    const { _id, name, surname, email } = validation_id;

    return res.send({ _id, name, surname, email });
}

export default userprofilecontroller;