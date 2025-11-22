import { MapPin, Phone, Mail } from "lucide-react";
import "../Styles/Contact.css";
import { useState } from "react";
import API from "../services/axios-client";
import { toast } from "react-toastify";

type SubmitStatus = { type: "success" | "error"; message: string } | null;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({ type: "error", message: "All fields are required" });
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      await API.post("/email/contact-us/ohamadike-fc", formData);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
                  1, Somonu Street, Oke-Ira, Ogba
                  <br />
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                required
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {submitStatus && (
                <p className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
