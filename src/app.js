import express from "express"
import { env } from "./core/env/env.js"
import errorHandler from "./middleware/error-handler.js"
import MongoConnect from "./core/db/mongo-connect.js"
import responseHandler from "./response/response-handler.js"

const app = express()


app.use(express.json())
const connect = new MongoConnect()
connect.connect().then(() => {



    app.get("/", (req, res, next) => {
        try {
            zaur()

        } catch (error) {
            next(error)
        }
    })


    app.use(errorHandler) 

    app.listen(env.PORT, () => {
        console.log(`App listening on port ${env.PORT}`);

    })
}).catch((error) => {
    console.log(error);
})




