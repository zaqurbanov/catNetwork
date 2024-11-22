import dotenv from "dotenv"
dotenv.config()

export const env = {
    PORT:process.env.PORT,
    MONGO_PATH: process.env.MONGO_PATH
}