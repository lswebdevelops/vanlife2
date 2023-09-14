import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetails = () => {
  const [van, setVan] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container-host">
      {van ? (
        <div className="van-detail-host">
          <div className="van-detail-host-img-container">
          <img src={van.imageUrl} alt={van.name} />
          <div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            $<span>{van.price}</span>/day
          </p>

          </div>

          </div>
          <p>{van.description}</p>
          <p><strong>Visibility:</strong> <span>Public</span></p>
          
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default HostVanDetails;
