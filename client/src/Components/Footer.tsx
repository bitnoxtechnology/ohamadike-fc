import { Facebook, Twitter, Instagram } from "lucide-react";
import "../Styles/Footer.css";
import Logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={Logo} alt="" />
            </div>
            <p className="footer-description">
              Nurturing football excellence and empowering young talents since
              2019.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <div className="footer-nav">
              {[
                "Home",
                "About",
                "Objectives",
                "Team",
                "Gallery",
                "Contact",
              ].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="footer-contact-info">
              <p>
                1, Somonu Street, Oke-Ira
                <br />
                Ogba, Ikeja, Lagos
              </p>
              <p>Phone: 08126415001</p>
              <p>cinfo@ohamadikefcc.org</p>
            </div>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-icon twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="social-icon instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Ohamadike International Football Club. All
            rights reserved.
          </p>
          <p className="footer-registered">Registered on November 27, 2019</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
