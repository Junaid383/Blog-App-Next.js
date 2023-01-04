import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';

function Card(props) {
  const router = useRouter()

  const showDetailsHandler =()=>{
    router.push('/blog/blog1')
    // router.push('/blog/' + props.id)

  }
  return (
    <>
      <div className="col-md-4">
              <div className="card-content">
                <div className="card-img">
                  <img src={props.src} alt=""></img>
                  <span>
                    <h4>{props.heading}</h4>
                  </span>
                </div>
                <div className="card-desc">
                  <h3>Heading</h3>
                  <p>
                    {props.content}
                   </p>

                  {/* <Link legacyBehavior href="/blog/blog1"> */}
                    <button className="btn-card" onClick={showDetailsHandler}>Read</button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
    </>
  )
}

export default Card
