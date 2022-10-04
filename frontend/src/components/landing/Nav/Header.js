import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return(
        <section className="header">
            <div className="nav-content">
            <div className="info">
                <h2><span>Your idea is our<br/> passion.</span> The only limit<br/>is your imagination.</h2>
                <p>We are waiting for you to give your feedback<br/>Do not hesitate and let us do our job for you.</p>
            </div>
            <div className="buttons">
                <HashLink smooth to="/#services">
                    
                    <button className="find-service">Find Services</button>
                </HashLink>
                <Link to="apply">
                    <button className="apply">Apply as a Freelancer</button>
                </Link>
            </div>
        </div>
        </section>
    );
}

export default Header;