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
  const router = useRouter();
  let id = router.query.edit
  const [user, setUser] = useState({
    author: "",
    heading: "",
    content: "",
    image: "",
    id:id
  });

 
  // console.log("object ID" , id)
  let name, value;
  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // console.log("Current Blog" , curr_blog)

  const postData = async (e) => {
    e.preventDefault();

    try {
      const { author, heading, content, image } = user;
      if (author && heading && content && image) {
        const res = await fetch("/api/updateData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        console.log("Data Update", user);
        alert("Data Update")
        router.push('/blog')
      }
      else{
        console.log("User" , user)
        alert("Filled All fields")
      }

    } catch (error) {
      console.log("Data Not Entered");

      // setMessage('Failed to add pet')
    }
  };

  return (
    <>
      <section className="details-card">
        <MDBContainer fluid>
          <MDBCard className="text-black" style={{ borderRadius: "50px" }}>
            <MDBCardBody>
              <form
                method="POST"
                onSubmit={(e) => {
                    postData(e);
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
                        name="author"
                        label="Author Name "
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.author}
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
                        name="content"
                        label="Blog"
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.content}
                        onChange={dataHandler}
                        className="w-100 form-control"
                      ></textarea>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="image me-3" size="lg" />
                      <input
                        type="text"
                        name="image"
                        label="image"
                        id="form1"
                        autoComplete="off"
                        value={user.image}
                        onChange={dataHandler}
                        className="w-100 form-control"
                      />
                    </div>
                  
                      <MDBBtn className="mb-4" size="lg">
                        Update Blog
                      </MDBBtn>

                    <br></br>
                  </MDBCol>

                  {/* ===============================Data Displayy========================= */}

                
                </MDBRow>

                
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        <section className="details-card">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="card-content">
                  <div className="card-img">
                    <img src={curr_blog.image} alt=""></img>
                  </div>
                  <div className="card-desc1">
                    <h3>{curr_blog.heading}</h3>

                    <p>{curr_blog.content}</p>

                    <MDBIcon fas icon="user me-3" size="sm" />
                    <span>{curr_blog.author}</span>
                    <br></br>
                    <MDBIcon fas icon="image me-3" size="sm" />
                    <span>{curr_blog.image}</span>
                    <p></p>

                    <Link legacyBehavior href="/blog/">
                      <a className="btn-card">Back</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
