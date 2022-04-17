import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 5000;

const handleListening = () =>
  console.log(`✅ 1️⃣ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);