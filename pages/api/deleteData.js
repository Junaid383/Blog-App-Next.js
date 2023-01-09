import blogSchema from "../../modals/blogSchema";
import connectDB from "../../midleware/mongoose";

const handlerfun = async (req, res) => {
  //   console.log(req.body);
  const id = req.body;
  console.log("object", id);

  if(req.method === 'DELETE'){
      let deleteData = await blogSchema.findOneAndDelete({_id: id })
      res.status(200).json({ success : 'deleteData' });
  }else {
      res.status(400).json({ error: "This method is not allowd" });
    }

//   blogSchema
//     .findByIdAndRemove(id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Data with id=${id}. Maybe Data was not found!`,
//         });
//       } else {
//         res.send({
//           message: "Data was deleted successfully!",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete Data with id=" + id,
//       });
//     });
};

export default connectDB(handlerfun);
