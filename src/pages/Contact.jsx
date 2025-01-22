import './Contact.css'
function Contect() {
    return(
        <>
        <div className="header-content">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Get in touch with us using the form below.
          </p>
        </div>
        <main className="contact-main">
          <section className="contact-section">
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Address:</strong> 123 Your Street, Your City, Your Country
              </p>
              <p>
                <strong>Email:</strong> contact@yourbrand.com
              </p>
              <p>
                <strong>Phone:</strong> +123-456-7890
              </p>
              <p>
                <strong>Business Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM
              </p>
            </div>
          </section>
        </main>
      </>
      
    )
}
export default Contect