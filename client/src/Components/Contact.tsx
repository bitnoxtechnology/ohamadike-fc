import { MapPin, Phone, Mail } from 'lucide-react'
import "../Styles/Contact.css"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon address">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  1, Somonu Street, Oke-Ira, Ogba<br />
                  Ikeja, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon phone">
                <Phone size={24} />
              </div>
              <div>
                <h3>Phone</h3>
                <p>08126415001</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon email">
                <Mail size={24} />
              </div>
              <div>
                <h3>Emails</h3>
                <p>info@ohamadikefc.org</p>
                <p>chairman@ohamadikefc.org</p>
                <p>HR@ohamadikefc.org</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact