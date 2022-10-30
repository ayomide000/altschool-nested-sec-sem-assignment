import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 className="text-center text-primary mb-3 mt-3">
        This is the About Page
      </h1>

      <nav>
        <div className="container text-center">
          <div className="row gx-5">
            <div className="col-12 col-lg-6 justify-content-between">
              <Link to="description">Description</Link>
              <Link to="nest-page">Nested Page</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default About;
