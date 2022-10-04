import './Team.css';
import image1 from '../../../assets/image/Teams/01.png';
import image2 from '../../../assets/image/Teams/02.png';
import image3 from '../../../assets/image/Teams/01.png';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Team() {
    return (
        <section className="team">
            <Fade big>
            <div className="center">
                <h1>OUR TEAM</h1>
            </div>
            <div className="team-content">
                <div className="box">
                    <img src={image1} alt="male"/>
                    <h3>Jonell Fernandez</h3>
                    <h5>Founder</h5>
                    <h5>jonellfernandez101@gmail.com</h5>
                    <div className="icons">
                        <a rel="noreferrer"  href="https://github.com/RaymartDev" target="_blank"><i className="ri-github-fill"></i></a>
                        <a rel="noreferrer"  href="https://www.facebook.com/jonellpuka4" target="_blank"><i className="ri-facebook-box-fill"></i></a>
                        <Link to="#"><i className="ri-instagram-fill"></i></Link>
                    </div>
                </div>

                <div className="box">
                    <img src={image2} alt="male"/>
                    <h3>Raymart Sarmiento</h3>
                    <h5>Co-Founder</h5>
                    <h5>raymart.sarmiento23@outlook.com</h5>
                    <div className="icons">
                        <a rel="noreferrer"  href="https://github.com/RaymartDev" target="_blank"><i className="ri-github-fill"></i></a>
                        <a rel="noreferrer"  href="https://www.facebook.com/LifeonBlack/" target="_blank"><i className="ri-facebook-box-fill"></i></a>
                        <Link to="#"><i className="ri-instagram-fill"></i></Link>
                    </div>
                </div>

                <div className="box">
                    <img src={image3} alt="male"/>
                    <h3>Daniel Javellana</h3>
                    <h5>Artist</h5>
                    <h5>danieljavellanayt@gmail.com</h5>
                    <div className="icons">
                        <a rel="noreferrer"  href="https://www.facebook.com/dnljvln" target="_blank"><i className="ri-facebook-box-fill"></i></a>
                        <Link to="#"><i className="ri-instagram-fill"></i></Link>
                    </div>
                </div>

            </div>
            </Fade>
	</section>
    );
}

export default Team;