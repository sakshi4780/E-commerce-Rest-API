import express from "express"; // using this syntax because of esm package
const app = express();
app.use(express.json());
import { APP_PORT, DB_URL } from "./config";
import errorHandler from "./middlewares/errorHandler";
import mongoose from "mongoose";
import routes from "./routes";
import path from "path";
//to connect or create our database
mongoose
  .connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((e) => console.log("No connection"));

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(errorHandler);
app.use("/uploads", express.static("uploads"));
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
