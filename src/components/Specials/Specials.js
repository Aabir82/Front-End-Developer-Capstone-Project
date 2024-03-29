import { Link } from "react-router-dom";
import Cards from "./Cards/Cards";
import "./Specials.css";
import "./Specialsdesktop.css";
import "./Specialstablet.css";

function Specials() {

  return (
    <div className="specials-section">
      <div className="specials-heading">
        <h2 className="sub-titles">Specials</h2>
        <button type="button" className="online-menu button-rounded-corners karla-calltoaction">
        <Link to="/onlineorder" aria-label="Go to menu page on click">Order Online</Link>
        </button>
      </div>
      <div className="cards">
        <Cards />
        </div>
    </div>
  );
}

export default Specials;
