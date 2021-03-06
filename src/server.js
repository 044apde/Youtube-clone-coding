import express, { Router } from "express";
import morgan from "morgan"; //logger 
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./router/rootRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";
import { localMiddleware } from "./middlewares";

const app = express(); // 이 부분이 만들어지고 express 코드를 작성해야 한다.
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.disable("x-powerd-by"); // 불필요한 url요소를 제거한다  ~express 어쩌고 사용했다는 내용

app.use(logger); //middleware 
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);

app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;