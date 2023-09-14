import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanHostElements = vans.map((van) => (
    <div key={van.id} className="van-tile-host">
      <Link to={`/host/vans/${van.id}`} className="van-tile-host-link link">
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info-host">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Your listed vans</h1>
      <div className="van-list-host">{vanHostElements}</div>
    </div>
  );
};

export default HostVans;
