import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ 2️⃣ Connect to DB");
const handleError = () => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);