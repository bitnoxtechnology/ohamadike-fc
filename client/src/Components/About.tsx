import "../Styles/About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Ohamadike International FC</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Story</h3>
            <p>
              Registered as a corporate body on November 27, 2019, Ohamadike International Football Club has been dedicated to nurturing football talent and promoting excellence in Nigerian football. We are based in Ogba, Ikeja, Lagos, and serve as a beacon of hope for aspiring young footballers.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              We are committed to promoting football skills, sponsoring talented youths, and developing the game of Association football in all its branches. Our focus is on preventing rule infringements, protecting the integrity of the game, and fostering fair play both on and off the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
