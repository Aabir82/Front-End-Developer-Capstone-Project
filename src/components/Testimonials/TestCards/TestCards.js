import testData from "./testData";
import "./TestCards.css";
import "./TestCardsdesktop.css";
import "./TestCardstablet.css";

function TestCards() {
  const testimonials = testData.map((test) => (
    <div className="test-card" key={test.id}>
      <h2 className="test-rating">{test.rating}</h2>
      <img
        src={test.reviewerImage}
        alt={test.reviewerImage + " image"}
        className="test-image"
      />
      <h3 className="test-name">{test.name}</h3>
      <p className="test-review">{test.review}</p>
    </div>
  ));

  return <div className="test-container">{testimonials}</div>;
}

export default TestCards;
