import './Services.css';
import web from '../../../assets/image/Services/web.svg';
import app from '../../../assets/image/Services/app.svg';
import dm from '../../../assets/image/Services/seo.svg';
import seo from '../../../assets/image/Services/dm.svg';
import Zoom from 'react-reveal/Zoom';

function Services() {
    return (
        <section className="services" id="services">
            <Zoom cascade>
            <div className="container-fluid">
                <h1 className="text-center mt-5 display-3 fw-bold">Our <span className="theme-text">Services</span></h1>
                <hr className="mx-auto mb-5 w-25"/>
                <div className="row mb-5">
                    <div className="col-12 col-sm-6 col-md-3 m-auto">
                        <div className="card shadow">
                            <img src={web} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="text-center">Web Development</h3>
                                <hr className="mx-auto w-75"/>
                                <p>
                                    We are offering every web development services such as: UI Design, Dynamic or Static Website. It always depends on you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 m-auto">
                        <div className="card shadow">
                            <img src={app} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="text-center">App Development</h3>
                                <hr className="mx-auto w-75"/>
                                <p>
                                    We are offering every software development services with UI Design it depends on you whether we focus or not on design. Tell us how soon you want it to be done. We will follow your lead.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 m-auto">
                        <div className="card shadow">
                            <img src={dm} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="text-center">Illustrations / Graphic Design</h3>
                                <hr className="mx-auto w-75"/>
                                <p>
                                    One of our team member mainly focus on design and we are proud to say that we can provide you greater result with design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 m-auto">
                        <div className="card shadow">
                            <img src={seo} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="text-center">Logo / Brand Creation</h3>
                                <hr className="mx-auto w-75"/>
                                <p>
                                    No idea for brand / logo design? tell us what you think and how you want your logo to be designed. We will provide you a great result for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Zoom>
        </section>
    );
}

export default Services;