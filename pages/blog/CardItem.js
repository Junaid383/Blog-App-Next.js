import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function CardItem(props) {
  let num;
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  // console.log("Item Page",props)
  let blog_string = props.content;
  let cap_author = props.author.toUpperCase();
  // console.log("object" , cap_author)

  const deleteData = async ( id) => {
  
    console.log("Clicked", id);

    try {
      const res = await fetch(`/api/deleteData/`, {
       method: 'DELETE',
       body: id,
       
      });
      
      console.log("Data Deleted")
      // alert("Blog Delete");
      console.log("Responce " , res)
      
      router.push("/blog");
    } catch (error) {
      console.log("Error");

      // setMessage('Failed to add pet')
    }

    setModalOpen(!modalOpen);
  };

  return (
    <>
      {/* <div className="col-md-4 pd_bottom">
        <div className="card-content ">
          <div className="card-img">
            <img src={props.image} alt=""></img>
            <span>
              <h4>{cap_author}</h4>
            </span>
          </div>

            <div className="card-desc ">
              <h3>{props.heading}</h3>
              <div className="d-flex justify-content-around">
                <p>
                  {blog_string.slice(0, 200) +
                    (blog_string.length > 200 ? "  ..." : "")}{" "}
                </p>
              </div>

              <div className="d-flex justify-content-around">
                <Link href={"/blog/" + props.id}>
                  <button className="btn-card">Read</button>
                </Link>

                <Link href={"/blog/edit/" + props.id}>
                  <button
                    className="btn-card1 "
                    style={{ backgroundColor: "green", marginLeft: "20px" }}
                  >
                    Edit
                  </button>
                </Link>
                <Link href={"/blog/delete/" + props.id}>
                  <button
                    className="btn-card1"
                    style={{ backgroundColor: "#d11a2a", marginLeft: "20px" }}
                  >
                    Delete
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div> */}

      {/* <table id="example" className="table table-striped"> */}
      <tbody>
        <tr>
          <td>{counter} </td>
          <td> {cap_author}</td>
          <td> {props.heading}</td>
          <td> {props.date}</td>
          <td>
            {" "}
            <Link href={"/blog/" + props.id}>
              {/* <button className="btn-card ">Read</button> */}
              <i
                className="fas fa-eye fa-2x"
                style={{ color: "Blue", paddingRight: "15px", size: "20px" }}
              ></i>
            </Link>
            <Link href={"/blog/edit/" + props.id}>
              {/* <button
                className="btn-card1 "
                style={{ backgroundColor: "green", marginLeft: "20px" }}
              >
                Edit
              </button> */}
              <i
                className="fas fa-edit  fa-2x"
                style={{ color: "green", paddingRight: "15px" }}
              ></i>
            </Link>
            {/* <Link href={"/blog/delete/" + props.id}> */}
            {/* <button
              className="btn-card1"
              style={{ backgroundColor: "#d11a2a", marginLeft: "20px" }}
              onClick={() => setModalOpen(!modalOpen)}
            >
              Delete
            </button> */}
            {/* </Link> */}
            <i
              className="fas fa-trash-alt fa-2x"
              onClick={() => setModalOpen(!modalOpen)}
              style={{ color: "#d11a2a" }}
            ></i>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
              <ModalBody>Are you sure to delete</ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="button"
                  onClick={() => {
                    deleteData(props.id);
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </Modal>
          </td>
        </tr>
      </tbody>

      {/* </table> */}
    </>
  );
}

export default CardItem;
