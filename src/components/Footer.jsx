import './Footer.css'

function Footer() {
    return(
        <>
  <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>About Us</h4>
      <p>We provide amazing solutions to make your life easier.</p>
    </div>
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@example.com</p>
      <p>Phone: +123-456-7890</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 Your Company. All rights reserved.</p>
  </div>
</footer>

</>
    )
}
export default Footer