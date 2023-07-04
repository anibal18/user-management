import{Type} from "@sinclair/typebox";

export const _id=Type.String({
    format:"uuid",
    errorMessage:{
        type:"the data type is not correct",
        format:"the format type is not correct"
    } 
});

export const name=Type.String({
    minLength:2,
    maxLength:20,
    errorMessage:{
        minLength:"Name must be at least 2 characters long",
        maxLength:"Name must be maximum of 20 characters long"
    }
});

export const surname=Type.String({
    minLength:2,
    maxLength:20,
    errorMessage:{
        minLength:"Surname must be at least 2 characters long",
        maxLength:"Surname must be maximum of 20 characters long"
    }
});

export const email=Type.String({
    format:"email",
    errorMessage:{
        type:"the data type is not correct",
        format:"the format type is not correct"
    }
});

export const password=Type.String({
    format:"password",
    minLength:10,
    maxLength:25,
    errorMessage:{
        minLength:"Password must be at least 10 characters long",
        maxLength:"Password must be maximum 25 characters long"
    }
});