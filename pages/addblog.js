import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

// const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/BlogApp?retryWrites=true&w=majority`

function Addblog() {
  const router = useRouter();

  const [user, setUser] = useState({
    author: "",
    heading: "",
    content: "",
    image: "",
  });

  let name, value;
  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    
    // console.log(user);
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { author, heading, content, image } = user;
      
      if (author && heading && content && image) {
      
          
          const res = await fetch("/api/addData", {
            method: "POST",
            headers: {
              "Content-Length": "<calculated when request is sent>",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          console.log("Data Entered", user);
          alert("Data Entered");
          router.push("/blog");
       
        
      } else {
        console.log("User", user);
        alert("Filled All fields");
      }
    } catch (error) {
      console.log("Data Not Entered");
      alert("Data Not Entered" , error)
      // setMessage('Failed to add pet')
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
                        name="author"
                        label="Author Name "
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.author}
                        onChange={dataHandler}
                        className="w-100"
                        required
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
                        required
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="pencil me-3" size="lg" />

                      <textarea
                        name="content"
                        label="Blog"
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.content}
                        onChange={dataHandler}
                        className="w-100 form-control"
                     //   maxLength="10"
                        required
                      ></textarea>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="image me-3" size="lg" />
                      <MDBInput
                        name="image"
                        label="Image URL "
                        id="form1"
                        type="text"
                        autoComplete="off"
                        value={user.image}
                        onChange={dataHandler}
                        className="w-100"
                        required
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

        {/* <ToastContainer /> */}
      </section>
    </>
  );
}

export default Addblog;
