import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
    <div className="van-list-container-dashboard">
      <div className="dashboard-welcome-review-div">
      <div className="welcome-div">
      <h1>Welcome!</h1>
        <div className="review-welcome-div">
          <p>
            Income last <span>30 days</span>
          </p>
          <Link className="link" to={"/host/income"}>Details</Link>
        </div>
        <p><strong>$2,260</strong></p>
        
      </div>
      <div className="review-dashboard-div">
        <p><strong>Review score </strong>⭐ 5.0/5</p>
        <Link className="link" to={"/host/reviews"}>Details</Link>
      </div>

      </div>
      
      <h3>Your listed vans</h3>

      <div className="van-list-host">{vanHostElements}</div>
    </div>
  );
};

export default Dashboard;
