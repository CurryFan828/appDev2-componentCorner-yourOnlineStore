import "./Hero.css";

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{ctaText}</button>
      </div>
    </section>
  );
}

export default Hero;
