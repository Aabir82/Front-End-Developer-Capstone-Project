import heroImage from "../../images/restauranfood.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1 className="major-headings">Little Lemon</h1>
        <h2 className="sub-titles">Chicago</h2>
        <p className="paragraph-text">
          We are a family owned Mediterranean Restaurant, focussed on
          traditional recipes served with a modern twist.
        </p>
        <button
          type="button"
          className="button-rounded-corners reserve-table karla-calltoaction"
        >
          <a href="/reservations">Reserve a table</a>
        </button>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImage} alt="restaurant pic" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
