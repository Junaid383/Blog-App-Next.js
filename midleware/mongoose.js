import { mongoose } from "mongoose";
const mongoDB_URL = `mongodb://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`


const connectDB =  (handler) =>async (req ,res) =>{ 
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(mongoDB_URL,{ useNewUrlParser: true })
    return handler(req, res)
}

export default connectDB;