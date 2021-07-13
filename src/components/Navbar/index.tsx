import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link to="/"><span className="navbar-brand mb-0 h1">Github API</span></Link>
    </nav>
  );
};

export default Navbar;
