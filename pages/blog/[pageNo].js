import { useRouter } from "next/router";
import Link from "next/link";

import { mongoose } from "mongoose";
import blogSchema from "../../modals/blogSchema";

const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`;

function PageNo({curr_blog}) {

  // console.log("object" , curr_blog)
  
 
  return (
    <div className="pageContent" >
      
      <section className="details-card">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="card-content">
                <div className="card-img">
                  <img src={curr_blog.image} alt=""></img>
                  <span>
                    <h4>{curr_blog.heading}</h4>
                  </span>
                </div>
                <div className="card-desc1">
                  <h3>{curr_blog.heading}</h3>
                  <p>
                  {curr_blog.content}
                  </p>
                  <Link legacyBehavior href="/blog/">
                    <a className="btn-card">Back</a>
                  </Link>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageNo;


export async function getServerSideProps(context) {
  const id = context.params.pageNo     //pageNo File name- = =  URL 
  // console.log(`blog id `, id)
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(mongoDB_URL);
  }

  try {
    
    let getblogs = await blogSchema.findById(id);
    // console.log("SSP--------", getblogs);

    return {
      props: { curr_blog: JSON.parse(JSON.stringify(getblogs)) }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    };
  }
}
