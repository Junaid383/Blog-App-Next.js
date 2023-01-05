import blogSchema from "../../modals/blogSchema";
import connectDB from "../../midleware/mongoose";

const handlerfun = async (req, res) => {
  console.log(req.body)
  const {  author , heading, blog } = req.body;

  if (req.method == "POST") {
    // console.log(`req `, req);
    // for (let i = 0; i < req.body.length; i++) {
    let p = new blogSchema({
      author,
      heading,
      blog,
    });
    const datasave = await p.save();

    // }
    res.status(200).json({ success: "Data Stored" });
  } else {
    res.status(400).json({ error: "This method is not allowd" });
  }
};

export default connectDB(handlerfun);
