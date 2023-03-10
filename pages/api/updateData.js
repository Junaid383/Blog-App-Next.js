import blogSchema from "../../modals/blogSchema";
import connectDB from "../../midleware/mongoose";

const handlerfun = async (req, res) => {
  //   console.log(req.body);
  const { author, heading, content, image, id } = req.body;

  if (req.method == "POST") {
    let p = await blogSchema.findByIdAndUpdate(id, {
      author: author,
      heading: heading,
      content: content,
      image: image,
      new: true,
    });
    const datasave = await p.save();

    res.status(200).json({ success: "Data Update" });
  } else {
    res.status(400).json({ error: "This method is not allowd" });
  }
};

export default connectDB(handlerfun);
