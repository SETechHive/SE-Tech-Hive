import './Features.css';
import Zoom from 'react-reveal/Zoom';

function Features() {
    return(
        <section className="features" id="features">
            <Zoom cascade>
            <div className="title">
                    <h1>OUR FEATURES</h1>
                    <p>
                    Keep on supporting us and maintain the platform. We will surely provide you great result and provide great technology to all people</p>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="shape">
                        <i className="fa bkg1"></i>
                            <div className="inner-shape bkg1">
                                <div className="content">
                                    <h2>24/7<br/>Support</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shape">
                        <i className="fa bkg2"></i>
                            <div className="inner-shape bkg2">
                                <div className="content">
                                    <h2>Money<br/>Guaranteed</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shape">
                        <i className="fa bkg3"></i>
                            <div className="inner-shape bkg3">
                                <div className="content">
                                    <h2>High<br/>Scalability</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shape">
                        <i className="fa bkg4"></i>
                            <div className="inner-shape bkg4">
                                <div className="content">
                                    <h2>Complete<br/>Workforce</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </section>
    );
}

export default Features;