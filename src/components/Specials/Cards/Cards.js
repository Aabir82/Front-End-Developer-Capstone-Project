import cardData from "./cardData";
import deliveryIcon from "../../../images/food-delivery-icon.png";

import "./Cards.css";
import "./Cardsdesktop.css";
import "./Cardstablet.css";

import { Link } from "react-router-dom";

function Cards() {
  const cardArray = cardData.map((card) => {
    return (
      <div className="card-body" key={card.id}>
            <div className="wrapper">
            <img src={card.image} alt={card.dishName + ' image'} 
                    className="card-image" />
                </div>
            <h2 className="dish-name">{card.dishName}</h2>
            <h2 className="dish-price">{card.dishPrice}</h2>
            <p className="dish-description">{card.dishDescription}</p>
            <Link to="/onlineorder" className="order-delivery" aria-label="Go to menu page on click" >Order delivery<img src={deliveryIcon} alt="delivery icon" className="delivery-icon"/></Link>
            

           </div> 
    );
});

return <div className="card-container">{cardArray}</div>;
}
export default Cards;
