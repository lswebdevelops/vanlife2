import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
      <Link to={van.id}>
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
      <button
        className={`van-type ${
          typeFilter === "simple" ? `simple` : `van-type`
        }`}
        onClick={() => setSearchParams({ type: "simple" })}
      >
        Simple
      </button>
      <button
        className={`van-type ${
          typeFilter === "rugged" ? `rugged` : `van-type`
        }`}
        onClick={() => setSearchParams({ type: "rugged" })}
      >
        Rugged
      </button>
      <button
        className={`van-type ${
          typeFilter === "luxury" ? `luxury` : `van-type`
        }`}
        onClick={() => setSearchParams({ type: "luxury" })}
      >
        Luxury
      </button>
      {/*  if there is a typeFilter value, the clear button will appear */}
      {typeFilter ? (
        <button
          className={`van-type-clear van-type`}
          onClick={() => setSearchParams({ type: "" })}
        >
          Clear Filter
        </button>
      ) : null}

      <div className={`van-list`}>{vanElements}</div>
    </div>
  );
};
export default Vans;
