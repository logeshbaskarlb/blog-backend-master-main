import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT || 5000))
  .then(() => console.log("Connected to database😊"))
  .catch((err) => console.log(err));

  app.get('/', function (request, response)
 { 
    response.send('Hello World ✨🎉✨')
 }); 