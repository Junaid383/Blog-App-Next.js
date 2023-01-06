import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";


function CardItem(props) {
    const router = useRouter();
// console.log("Item Page",props)
let blog_string = props.content;
  
return (
    <>
      <div className="col-md-4 pd_bottom" >
        <div className="card-content">
          <div className="card-img">
            <img src={props.image} alt=""></img>
            <span>
              <h4>{props.heading}</h4>
            </span>
          </div>
          <div className="card-desc">
            <h3>{props.heading}</h3>
            <p>{blog_string.slice(0, 200) + (blog_string.length > 200? "  ..." : "")} </p>
          <Link href={"/blog/" + props.id }>
            <button className="btn-card">
              Read
            </button>
          </Link> 
       
          <Link href={"/blog/edit/" + props.id}>
            <button className="btn-card">
              Edit
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


