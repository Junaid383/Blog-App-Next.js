import React from "react";
import Link from "next/link";

function index() {


  const data = "Ali";
  return (
    <>
      <section class="details-card">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  <img src="https://placeimg.com/380/230/nature" alt=""></img>
                  <span>
                    <h4>heading</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    total
                    {/* <span className="author_name"> M. M . J</span> */}
                  </p>

                  <Link legacyBehavior href="/blog/blog1">
                    <button class="btn-card">
                      Read
                    </button>
                  </Link>


                 
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  {/* <img src="https://placeimg.com/380/230/animals" alt=""></img> */}
                  <span>
                    <h4>heading2</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/blog2">
                    <a class="btn-card">Read</a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  {/* <img src="https://placeimg.com/380/230/tech" alt=""></img> */}
                  <span>
                    <h4>heading3</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/blog3">
                    <a class="btn-card">Read</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  {/* <img src="https://placeimg.com/380/230/nature" alt=""></img> */}
                  <span>
                    <h4>heading</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/blog4">
                    <a class="btn-card">Read</a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  {/* <img src="https://placeimg.com/380/230/animals" alt=""></img> */}
                  <span>
                    <h4>heading2</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/blog5">
                    <a class="btn-card">Read</a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-content">
                <div class="card-img">
                  {/* <img src="https://placeimg.com/380/230/tech" alt=""></img> */}
                  <span>
                    <h4>heading3</h4>
                  </span>
                </div>
                <div class="card-desc">
                  <h3>Heading3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/blog6">
                    <a class="btn-card">Read</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
