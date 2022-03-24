import express, { Router } from "express";
import morgan from "morgan"; //logger 
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";

<<<<<<< HEAD
const PORT = 5000;

const app = express();  // 이 부분이 만들어지고 express 코드를 작성해야 한다. !!
=======
const app = express(); // 이 부분이 만들어지고 express 코드를 작성해야 한다.
>>>>>>> a3c617e6bbc2c325a2d2ab1b94f89b377cada398
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.disable("x-powerd-by"); // 불필요한 url요소를 제거한다  ~express 어쩌고 사용했다는 내용

app.use(logger); //middleware 
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;