import "../Styles/Gallery.css"
import Gallery1 from "../assets/Gallery.jpeg"
import Gallery2 from "../assets/Gallery2.jpg"
import Gallery3 from "../assets/Gallery3.jpeg"
import Gallery4 from "../assets/Gallery4.jpeg"
import Gallery5 from "../assets/Image1.jpg"
import Gallery6 from "../assets/Gallery5.jpeg"

function Gallery() {
  const galleryItems = [
    { image: Gallery1, label: 'Training Session' },
    { image: Gallery2, label: 'Match Day' },
    { image: Gallery3, label: 'Youth Development' },
    { image: Gallery4, label: 'Team Building' },
    { image: Gallery5, label: 'Community Outreach' },
    { image: Gallery6, label: 'Trophy Ceremony' }
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Moments from our journey</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
            >
              <img 
                src={item.image} 
                alt={item.label}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
