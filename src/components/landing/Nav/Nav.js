import "./Nav.css";
import Logo from '../../../assets/image/Nav/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav() {

	return (
                <header>
                        <Link to="/">
                                <img className="logo" src={Logo} alt=""/>
                        </Link>
                        <div className="navigation">
                                <HashLink smooth to="/#home">Home</HashLink>
                                <HashLink smooth to="/#services">Services</HashLink>
                                <HashLink smooth to="/#contact">About Us</HashLink>
                                <HashLink smooth to="/#contact">Contact</HashLink>
                                <HashLink smooth to="/#faq">FAQ</HashLink>
                        </div>
                        <div className="buttons">
                                <Link to="sign-up">
                                        <button className="signup">Sign Up</button>
                                </Link>
                                <Link to="/login">
                                        <button className="signin">Login →</button>
                                </Link>
                        </div>
                </header>       
	);
}

export default Nav;