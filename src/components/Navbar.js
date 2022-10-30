import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <div className="container-fluid">
    <nav className="primary-nav container-fluid">
      <div className="logo mb-3 text-primary">Akande Gbolahan</div>
      <ul className="mt-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
    // </div>
  );
};

export default Navbar;
