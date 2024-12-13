import mongoose from "mongoose";
import { AppConfig } from "../config/env.config.js";

export const connection = () => {
  mongoose
    .connect(AppConfig.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
