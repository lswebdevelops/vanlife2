import { NavLink, Outlet } from "react-router-dom";
import '../index.css'

const HostLayout = () => {
  return (
    <>
      <nav className="nav-host">
        <NavLink className={({isActive})=> isActive ? "my-link" : "link"} to={"/host/"}>Dashboard</NavLink>
        <NavLink className={({isActive})=> isActive ? "my-link" : "link"}  to={"/host/income"}>Income</NavLink>
        <NavLink className={({isActive})=> isActive ? "my-link" : "link"}  to={"/host/vans"}>Vans</NavLink>
        <NavLink className={({isActive})=> isActive ? "my-link" : "link"}  to={"/host/reviews"}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
