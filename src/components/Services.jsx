import './Services.css'
function Services() {
    
return(
  
    <>
  <div className="header-content">
    <h2>Our Services</h2>
    <p>Discover the wide range of services we offer to meet your needs.</p>
  </div>
  <main className="services-main">
    <section className="services-section">
      <div className="service-card">
        <div className="service-icon">
          <img src="https://via.placeholder.com/100" alt="Service 1" />
        </div>
        <h3>Service One</h3>
        <p>
          We provide high-quality solutions tailored to your unique
          requirements.
        </p>
      </div>
      <div className="service-card">
        <div className="service-icon">
          <img src="https://via.placeholder.com/100" alt="Service 2" />
        </div>
        <h3>Service Two</h3>
        <p>Our expert team ensures exceptional outcomes for every project.</p>
      </div>
      <div className="service-card">
        <div className="service-icon">
          <img src="https://via.placeholder.com/100" alt="Service 3" />
        </div>
        <h3>Service Three</h3>
        <p>We are committed to providing innovative and efficient services.</p>
      </div>
      <div className="service-card">
        <div className="service-icon">
          <img src="https://via.placeholder.com/100" alt="Service 4" />
        </div>
        <h3>Service Four</h3>
        <p>Count on us for reliable and consistent support at all times.</p>
      </div>
    </section>
  </main>
</>

  
)

}
export default Services