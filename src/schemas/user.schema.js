import mongoose from "mongoose"

const {Schema , model}=mongoose;

const userschema= new Schema({
    //al utilizar _id con esto lo que hacemos es dar un id propio al schema , y borramos el que se genera por defecto
    _id:{type:String , _id:false},
    name:{type:String , require:true , minLenght:2 , maxLenght:20},
    surname:{type:String , require:true , minLenght:2 , maxLenght:20},
    email:{type:String , require:true , unique:true},
    password:{type:String , require:true}
});


const usermodel=model("user" , userschema);

export default usermodel;
