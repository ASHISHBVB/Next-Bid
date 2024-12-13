import app from "./app.js";
import cloudinary from "cloudinary";

import { AppConfig } from "./config/env.config.js";
 
cloudinary.v2.config({ 
  cloud_name: AppConfig.CLOUDINARY.CLOUD_NAME,
  api_key: AppConfig.CLOUDINARY.API_KEY,
  api_secret: AppConfig.CLOUDINARY.API_SECRET,
});

const port = AppConfig.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
    