import "./About.css";
import "./Abouttablet.css";
import "./Aboutdesktop.css";

import heroImage from "../../images/restauranfood.jpg";
import marioAdrianA from "../../images/Mario and Adrian A.jpg"
import marioAdrianB from "../../images/Mario and Adrian b.jpg"

function About() {
    return (
        <div className="about-section">
            <div className="about-section-text">
                <h1 className="major-headings">Little Lemon</h1>
                <h2 className="sub-titles">Chicago</h2>
                <p className="paragraph-text .">We are a family owned Mediterranean Restaurant, focussed on traditional recipes served with a modern twist.</p>
            </div>
            <div className="image-container1">
            <img src={marioAdrianA} alt="restaurant image1" className="about-image1" />
            </div>
            <div className="image-container2">
            <img src={marioAdrianB} alt="restaurant image2" className="about-image2" />
         </div>
         
        </div>
    )
}

export default About;