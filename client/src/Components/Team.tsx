import "../Styles/Team.css"
import Team1 from "../assets/Team1.jpeg"
import Team2 from "../assets/Team2.jpeg"
import Team3 from "../assets/Team3.jpeg"
import Team4 from "../assets/Team4.jpg"

function Team() {
  const trustees = [
    {
      name: "Dr. Remigius I.C Igbonaju",
      position: "Chairman",
      image: Team1
    },
    {
      name: "Miss Sandra Ifunanya Igbonaju",
      position: "Trustee",
      image: Team4
    },
    
    {
      name: "Barrister Terry Clinton Ifeanyi Igbonaju",
      position: "Trustee",
      image: Team2
    },

    {
      name: "Mr. Harrison Nnaemeka Igbonaju",
      position: "Secretary",
      image: Team3
    }
  ]

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Leadership</h2>
          <div className="section-divider"></div>
        </div>

        <div className="team-grid">
          {trustees.map((trustee, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar-wrapper">
                <img 
                  src={trustee.image} 
                  alt={trustee.name}
                  className="team-avatar"
                />
              </div>
              <h3>{trustee.name}</h3>
              <p className="team-position">{trustee.position}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team