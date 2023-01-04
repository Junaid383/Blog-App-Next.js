// DB connection string

import mongoose from "mongoose"

let MONGODB_URI= `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/?retryWrites=true&w=majority`

// const conn =async ()=>{
//     await mongoose.connect(MONGODB_URI);
//     console.log("Connection")
// }



let conn =async()=>{
  try {
    mongoose.connect(MONGODB_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () =>
      console.log("connected"));
  } catch (error) {
    console.log("could not connect");
  }
}
export default conn;



