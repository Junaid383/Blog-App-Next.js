import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href="/">
            <h5 className="navbar-brand">Blog App</h5>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/home">
                  <h5 className="nav-link active" aria-current="page">
                    Home
                  </h5>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/blog">
                  <h5 className="nav-link" aria-current="page">
                    Blog
                  </h5>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/addblog">
                  <h5 className="nav-link " aria-current="page">
                    Add Blog
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
