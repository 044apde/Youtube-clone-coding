import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";

const PORT = 4000;

const app = express();  // 이 부분이 만들어지고 express 코드를 작성해야 한다. !!
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 💪`);

app.listen(PORT, handleListening);