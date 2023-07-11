import TestCards from "./TestCards/TestCards";

import "./Testimonials.css";
import "./Testimonialsdesktop.css";
import "./Testimonialstablet.css";

function Testimonials() {
    return (
        <div className="testimonials-section">
           <h1 className="testimonials-heading sub-title">Testimonials</h1>
        <TestCards />
        </div>
    )
}

export default Testimonials;