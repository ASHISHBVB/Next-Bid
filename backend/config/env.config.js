import { config } from "dotenv";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envFilePath = join(__dirname, "../.env");
config({ path: envFilePath });

export const AppConfig = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,

    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    COOKIE_EXPIRE: process.env.COOKIE_EXPIRE ? parseInt(process.env.COOKIE_EXPIRE) : 30,

    CLOUDINARY: {
        CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        API_KEY: process.env.CLOUDINARY_API_KEY,
        API_SECRET: process.env.CLOUDINARY_API_SECRET,
    }

    // GOOGLE_APP: {
    //     EMAIL_ID: process.env.GOOGLE_APP_EMAIL_ID,
    //     PASS_KEY: process.env.GOOGLE_APP_PASS_KEY
    // }
}
