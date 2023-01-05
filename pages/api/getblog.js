import blogSchema from "../../modals/blogSchema";
import connectDB from "../../midleware/mongoose";

const handlerfun = async (req, res) => {
   let getblogs = await blogSchema.find();
  res.status(200).json({ getblogs });
};


export default connectDB(handlerfun) 