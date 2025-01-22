import './About.css'

function About() {
    return(
        <>
        <div className="header-content">
          <h2>About Us</h2>
          <p>
            Learn more about our mission, values, and the journey that brought us
            here.
          </p>
        </div>
        <main className="about-main">
          <section className="about-section">
            <div className="about-image">
              <img src="https://img.freepik.com/premium-photo/arafed-cat-dressed-kimono-with-stick-pumpkin-generative-ai_955925-13978.jpg" alt="Our Team" />
            </div>
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>
                We are a passionate team dedicated to providing exceptional solutions
                and creating meaningful experiences. Our story began with a simple
                idea: to make a difference in our industry through innovation,
                integrity, and teamwork.
              </p>
            </div>
          </section>
          <section className="values-section">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Innovation</h4>
                <p>
                  We constantly strive to innovate and improve in everything we do.
                </p>
              </div>
              <div className="value-item">
                <h4>Integrity</h4>
                <p>
                  We believe in honesty, transparency, and doing the right thing
                  always.
                </p>
              </div>
              <div className="value-item">
                <h4>Collaboration</h4>
                <p>Teamwork is at the heart of everything we achieve.</p>
              </div>
            </div>
          </section>
          <section className="mission-section">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower businesses and individuals with innovative
              solutions that help them thrive in an ever-changing world.
            </p>
          </section>
        </main>
      </>
      
      
    )
}
export default About