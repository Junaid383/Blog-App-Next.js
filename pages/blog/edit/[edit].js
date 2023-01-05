import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

import { mongoose } from "mongoose";
import blogSchema from "../../../modals/blogSchema";
const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`;

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function PageNo({ curr_blog }) {
  const [user, setUser] = useState({
    name: "",
    heading: "",
    blog: "",
    image: "",
  });

  let blog_string = curr_blog.content;
  let name, value;
  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //   console.log("object" , curr_blog)

  return (
    // <div className="pageContent" >
    //   <section className="details-card">
    //   <h1>Edit Blog</h1>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-10">
    //           <div className="card-content">
    //             <div className="card-img">
    //               <img src={curr_blog.image} alt=""></img>
    //               <span>
    //                 <h4>{curr_blog.heading}</h4>
    //               </span>
    //             </div>
    //             <div className="card-desc">
    //               <h3>{curr_blog.heading}</h3>
    //               <p>
    //               {curr_blog.content}
    //               </p>
    //               <Link legacyBehavior href="/blog/">
    //                 <a className="btn-card">Back</a>
    //               </Link>

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
      <section className="details-card">
        <MDBContainer fluid>
          <MDBCard className="text-black m-4" style={{ borderRadius: "50px" }}>
            <MDBCardBody>
              <form
                method="POST"
                onSubmit={(e) => {
                  //   postData(e);
                }}
              >
                <MDBRow>
                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-2 order-lg-1 d-flex flex-column align-items-center"
                  >
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Edit Blog
                    </p>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <MDBInput
                        name="name"
                        label="Author Name "
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.name}
                        onChange={dataHandler}
                        className="w-100"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="heading me-3" size="lg" />
                      <MDBInput
                        name="heading"
                        label="Heading"
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.heading}
                        onChange={dataHandler}
                        className="w-100"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="blog me-3" size="lg" />

                      <textarea
                        name="blog"
                        label="Blog"
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.blog}
                        onChange={dataHandler}
                        className="w-100 form-control"
                      ></textarea>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="image me-3" size="lg" />
                      <input
                        type="text"
                        name="img"
                        label="image"
                        id="form1"
                        autoComplete="off"
                        value={user.image}
                        onChange={dataHandler}
                        className="w-100 form-control"
                      />
                    </div>
                    <Link href={"/blog"}>
                      <MDBBtn
                        className="mb-4"
                        size="lg"
                        // disabled={disabled}
                        // onClick={postData}
                      >
                        Update Blog
                      </MDBBtn>
                    </Link>

                    <br></br>
                  </MDBCol>

                  {/* ===============================Data Displayy========================= */}
                  
                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-2 order-lg-1 d-flex flex-column align-items-center"
                  >
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Blog Details
                    </p>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />

                      <ul class="list-group list-group-light">
                        <li class="list-group-item "> {curr_blog.author}</li>
                      </ul>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="heading me-3" size="lg" />
                      <ul class="list-group list-group-light">
                        <li class="list-group-item"> {curr_blog.heading}</li>
                      </ul>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="blog me-3" size="lg" />
                      <ul class="list-group list-group-light">
                        <li class="list-group-item">
                          {blog_string.slice(0, 35) +
                            (blog_string.length > 35 ? "  ..." : "")}{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="image me-3" size="lg" />

                      <ul class="list-group list-group-light">
                        <li class="list-group-item"> {curr_blog.image}</li>
                      </ul>
                    </div>

                    <br></br>
                  </MDBCol>
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>

        {/* <Index user = {user} /> */}

        {/* <ToastContainer /> */}
      </section>
    </>
  );
}

export default PageNo;

export async function getServerSideProps(context) {
  const id = context.params.edit; //edit File name- = =  URL
  //   console.log(`blog id `, id)
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
