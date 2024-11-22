import mongoose from "mongoose";
import { env } from "../env/env.js";
export default class MongoConnect{
    constructor(){
        if(MongoConnect.instance){
            return MongoConnect.instance
        }

        MongoConnect.instance = this
            this.connection = null
    }

    async connect(){
        if(this.connection){
            console.log("kohne baglantidan istifade olunur");
            return this.connection
        }

        try {
            console.log("Mongo connecting...");
            this.connection = await mongoose.connect(env.MONGO_PATH)
            console.log("Mongo connected");
        } catch (error) {
            console.log(error);
            console.log("MOngo erroru");       
        } 
        return this.connection
    } 
}   