import serverHttp from "#Config/http.js";
import "#Config/env.js";
import connect from "#Config/db.js";

const start=()=>{
    connect(process.env.MONGODB_URL);
    serverHttp.listen(process.env.PORT, ()=>{
        console.log("the server is listening rigth now");
    })
}

start();