import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  console.log(typeFilter);

  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      {/* <NavLink className={`filter-van-buttons`} to={`.`}>Clear</NavLink>
      <NavLink className={`van-type simple`} to={`?type=simple`}>Simple</NavLink>
      <NavLink className={`van-type luxury`} to={`?type=luxury`}>Luxury</NavLink>
      <NavLink className={`van-type rugged`} to={`?type=rugged`}>Rugged</NavLink> */}
{/*  using button instead of links */}
      <button className={`van-type simple`} onClick={()=> setSearchParams({type: "simple"})}>Simple</button>
      <button className={`van-type rugged`} onClick={()=> setSearchParams({type: "rugged"})}>Rugged</button>
      <button className={`van-type luxury`} onClick={()=> setSearchParams({type: "luxury"})}>Luxury</button>
      <button className={`van-type`} onClick={()=> setSearchParams({type: ""})}>Clear Filter</button>

      <div className={`van-list`}>{vanElements}</div>
    </div>
  );
};
export default Vans;
