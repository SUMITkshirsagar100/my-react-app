import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to SurgiBay</h1>
      <p>Your trusted healthcare marketplace</p>
      <div className="buttons">
        <Link to="/login" className="btn black">Login</Link>
        <Link to="/register" className="btn white">Register</Link>
      </div>

      <div className="features">
        <div>
          <h3>Medical Equipment</h3>
          <p>Browse our wide range of medical equipment</p>
        </div>
        <div>
          <h3>Bulk Orders</h3>
          <p>Place bulk orders and receive competitive bids</p>
        </div>
        <div>
          <h3>Verified Sellers</h3>
          <p>Connect with trusted healthcare suppliers</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
