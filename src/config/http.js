import {createServer} from "http"
import expressApp from "./express.js";
const serverHttp=createServer(expressApp);

export default serverHttp;