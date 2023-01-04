import mongoose from "mongoose"


const newBlog = new mongoose.Schema({
    image:
    {
        type: String,
        // required: true
        
    },
    authname: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    
   
    

});

const blogSchema = mongoose.model('Blog', newBlog);
export default blogSchema;
