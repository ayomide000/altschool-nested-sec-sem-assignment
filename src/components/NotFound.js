import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Ooops...! 404 Page Not Found</h1>
      <p>Looks like you came to a wrong page on our server</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
