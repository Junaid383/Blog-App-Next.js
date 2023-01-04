import React from "react";
import { useRouter } from "next/router";


function CardItem(props) {
    const router = useRouter();

  console.log(props);

  const showDetailsHandler = () => {
    router.push("/blog/" + props.id);
    // router.push('/blog/' + props.id)
  };
  return (
    <>
      <div className="col-md-4">
        <div className="card-content">
          <div className="card-img">
            <img src={props.image} alt=""></img>
            <span>
              <h4>{props.heading}</h4>
            </span>
          </div>
          <div className="card-desc">
            <h3>{props.heading}</h3>
            <p>{props.content}</p>

            <button className="btn-card" onClick={showDetailsHandler}>
              Read
            </button>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default CardItem;
