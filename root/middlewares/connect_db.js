// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


export default {
    async connect() {

    try {
        await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect database successfully!");
    } catch (error) {
        console.log("Connect database fail!");
    }
}
}

