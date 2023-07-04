import mongoose from "mongoose";

const connect=(url)=>{
    mongoose.connect(url).then(
        console.log("conected database")
    );
};

export default connect;