import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const location   = useLocation();
  console.log(location);

  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))     
  }, [params.id]);
  // search is used to use the back button and return to a previous filter 
  const search = location.state?.search || "";
  return (
    <div className="van-detail-container">
      <Link
        // to="..?type=simple" // hard coding it
        to={`..${search}`}
        relative="path"
        className="back-button"
        >
      &larr; <span>Back to all Vans</span></Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            $<span>{van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
