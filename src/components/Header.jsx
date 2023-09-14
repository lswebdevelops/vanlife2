import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">#VANLIFE</NavLink>
      <nav>
        <NavLink  className={({isActive})=> isActive ? "my-link" : "link"}  to="/host">Host</NavLink>
        <NavLink  className={({isActive})=> isActive ? "my-link" : "link"}  to="/about">About</NavLink>
        <NavLink  className={({isActive})=> isActive ? "my-link" : "link"}  to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
};

export default Header;
