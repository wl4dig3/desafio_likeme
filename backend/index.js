import express from "express";
import router from "./routes/router.js";
import dotenv from  "dotenv"; 
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors());
app.use("/", router)


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});