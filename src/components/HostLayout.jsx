import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="nav-host">
        <Link to={"/host/"}>Dashboard</Link>
        <Link to={"/host/reviews"}>Reviews</Link>
        <Link to={"/host/income"}>Income</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
