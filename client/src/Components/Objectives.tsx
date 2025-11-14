import { Target, Trophy, Heart, Users } from 'lucide-react'
import "../Styles/Objectives.css"

function Objectives() {
  const objectives = [
    {
      icon: <Target size={40} />,
      title: "Promote Football Skills",
      description: "Sponsor and encourage youths with interest in football, providing them with opportunities to develop their talents."
    },
    {
      icon: <Trophy size={40} />,
      title: "Develop the Game",
      description: "Foster and develop Association football in all its branches, ensuring the highest standards of play."
    },
    {
      icon: <Heart size={40} />,
      title: "Fair Play Principles",
      description: "Promote respect and sporting behavior, encouraging everyone to show respect both on and off the field."
    },
    {
      icon: <Users size={40} />,
      title: "Player Development",
      description: "Maintain affiliation and registration of players, referees, coaches and others involved in football."
    }
  ]

  return (
    <section id="objectives" className="objectives-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Objectives</h2>
          <div className="section-divider"></div>
        </div>

        <div className="objectives-grid">
          {objectives.map((obj, index) => (
            <div key={index} className="objective-card">
              <div className="objective-icon">{obj.icon}</div>
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objectives