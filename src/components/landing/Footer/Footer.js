import "./Footer.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/image/Contents/logo-icon-2.png';

function Footer() {

	return (
        <section className="Footer">
        <div className="wrapper">
            <div className="box1">
                <div className="links">
                    <h2>Quick Links</h2>
                    <div className="clickable-links">
                        <HashLink smooth to="/#services">Services</HashLink>
                        <Link to="sign-up">Sign Up</Link>
                        <HashLink smooth to="/#contact">Contact</HashLink>
                        <HashLink smooth to="/#faq">FAQ</HashLink>
                    </div>
                </div>
                <div className="links">
                    <h2>Our Services</h2>
                    <div className="clickable-links">
                        <HashLink smooth to="/#home">Home</HashLink>
                        <HashLink smooth to="/#contact">About Us</HashLink>
                        <HashLink smooth to="/#services">Services</HashLink>
                        <HashLink smooth to="/#features">Features</HashLink>
                    </div>
                </div>
                <div className="links">
                    <h2>Contact Us</h2>
                    <div className="clickable-links">
                        <span>se_tech_hive@outlook.com</span>
                        <span>sthcustomerservice@outlook.com</span>
                        <span>+63 9679472818</span>
                        <span>+63 9951814203</span>
                    </div>
                </div>
    
                <div className="last-part">
                    <img src={logo} alt=""/>
                    <p>We ensure everybody's experience to be better. Join us and let us spread the positivity within this platform. Lets spread the technology to everybody</p>
                </div>
            </div>
    
            <div className="box2">
                <i className="fa-brands fa-2x me-2 fa-facebook"></i>
                <i className="fa-brands fa-2x me-2 fa-tiktok"></i>
                <i className="fa-brands fa-2x me-2 fa-twitter"></i>
                <i className="fa-brands fa-2x me-2 fa-instagram"></i>
            </div>
        </div>
        
        <div className="finale">
            <p>© 2022-2023 SE Tech Hive. All Rights Reserved.</p>
            <p><span><Link to="#">User License Agreement</Link></span> | <span><Link to="#">Privacy Policy</Link></span> | <span><Link to="#">Terms & Condition</Link></span></p>
        </div>
    </section>
	);
}

export default Footer;