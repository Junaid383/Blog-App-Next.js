import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function CardItem(props) {
  const router = useRouter();
  // console.log("Item Page",props)
  let blog_string = props.content;
  let cap_author = props.heading.toUpperCase();
  // console.log("object" , cap_author)

  return (
    <>
      <div className="col-md-4 pd_bottom">
        <div className="card-content">
          <div className="card-img">
            <img src={props.image} alt=""></img>
            <span>
              <h4>{cap_author}</h4>
            </span>
          </div>
          <div className="card-desc">
            <h3>{props.heading}</h3>
            <p>
              {blog_string.slice(0, 200) +
                (blog_string.length > 200 ? "  ..." : "")}{" "}
            </p>
            <Link href={"/blog/" + props.id}>
              <button className="btn-card">Read</button>
            </Link>

            <Link href={"/blog/edit/" + props.id}>
              <button
                className="btn-card "
                style={{ backgroundColor: "green", marginLeft: "20px" }}
              >
                Edit
              </button>
            </Link>
            <Link href={"/blog/delete/" + props.id}>
              <button
                className="btn-card"
                style={{ backgroundColor: "#d11a2a", marginLeft: "20px" }}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default CardItem;
