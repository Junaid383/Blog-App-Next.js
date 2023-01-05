import { mongoose } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    author: { type: String },
    heading: { type: String },
    blog: { type: String },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("blog", blogSchema);
