import React, { useState } from "react";
import axios from "axios";
import Index from "./blog";
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



// const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/BlogApp?retryWrites=true&w=majority`



function Addblog() {
  const [user, setUser] = useState({
    name: "",
    heading: "",
    blog: "",
    image: "",
  });

  let name, value;
  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, heading, blog, image } = user;
    if (name && heading && blog) {
      console.log("object", user);

      // const response = await axios.post("/addblog", {
      //   data: {
      //     user,
      //   },
      // });
    } else {
      alert("Filled ALl fields");
    }
  };

  return (
    <>
      <section className="details-card">
        <MDBContainer fluid>
          <MDBCard className="text-black m-4" style={{ borderRadius: "50px" }}>
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
                      Add Blog
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
                        type="file"
                        name="img"
                        label="image"
                        id="form1"
                        autoComplete="off"
                        value={user.image}
                        onChange={dataHandler}
                        className="w-100 form-control"
                      />
                    </div>

                    <MDBBtn
                      className="mb-4"
                      size="lg"
                      // disabled={disabled}
                      // onClick={postData}
                    >
                      Add Blog
                    </MDBBtn>

                    <br></br>
                  </MDBCol>

                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-1 order-lg-2 d-flex align-items-center"
                  >
                    <MDBCardImage
                      src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"
                      fluid
                    />
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

export default Addblog;
