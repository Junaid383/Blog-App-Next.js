import { useRouter } from "next/router";
import Link from "next/link";

function pageNo() {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
      
      <section className="details-card">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="card-content">
                <div className="card-img">
                  <img src="https://placeimg.com/380/230/nature" alt=""></img>
                  <span>
                    <h4>heading</h4>
                  </span>
                </div>
                <div className="card-desc">
                  <h3>Heading</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p>
                  <Link legacyBehavior href="/blog/">
                    <a className="btn-card">Back</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default pageNo;
