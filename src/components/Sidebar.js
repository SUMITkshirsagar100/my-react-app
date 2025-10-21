import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SurgiBay</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/bulk-orders">Bulk Orders</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
