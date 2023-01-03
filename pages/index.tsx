import Link from "next/link";
import NavBar from "../pages/Navbar"


function index() {
  return (
    <>
    
      <header className="header">
        <div className="content">
          <h1 className="heading">
            <span className="small">welcome in the world of</span>
            blog
            <span className="no-fill">writing</span>
          </h1>
          <Link href="/addblog">
          <button className="btnn">  write a blog</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default index;
