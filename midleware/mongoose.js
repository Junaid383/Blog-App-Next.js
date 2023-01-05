import { mongoose } from "mongoose";
const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`


const connectDB =  (handler) =>async (req ,res) =>{ 
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(mongoDB_URL)
    return handler(req, res)
}

export default connectDB;