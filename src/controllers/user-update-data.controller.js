import usermodel from "#Schemas/user.schema.js";

const userupdatedata=async (req , res )=>{
    const {name , surname}=req.body;
    const {id}=req;

    const validation_id=await usermodel.findById(id).exec()

    if(!validation_id){
        return res.status(409).send({errors:["Unregistered user"]})
    }

    validation_id.name=name;
    validation_id.surname=surname;

    await validation_id.save()

    return res.send('Update user');

}
export default userupdatedata;