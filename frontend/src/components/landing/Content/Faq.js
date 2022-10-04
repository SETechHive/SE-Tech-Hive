import './Faq.css';
import logo from '../../../assets/image/Contents/faq.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

function Faq() {

    const[btnState, setBtnState] = useState(false);
    const[btnState2, setBtnState2] = useState(false);
    const[btnState3, setBtnState3] = useState(false);
    const[btnState4, setBtnState4] = useState(false);
    const[btnState5, setBtnState5] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }

    function handleClick2() {
        setBtnState2(btnState2 => !btnState2);
    }

    function handleClick3() {
        setBtnState3(btnState3 => !btnState3);
    }

    function handleClick4() {
        setBtnState4(btnState4 => !btnState4);
    }

    function handleClick5() {
        setBtnState5(btnState5 => !btnState5);
    }

    let toggleState = btnState ? "showAnswer" : null;
    let toggleState2 = btnState2 ? "showAnswer" : null;
    let toggleState3 = btnState3 ? "showAnswer" : null;
    let toggleState4 = btnState4 ? "showAnswer" : null;
    let toggleState5 = btnState5 ? "showAnswer" : null;

    return (
        <section className="faq" id="faq">
            <Fade big>
            <div className="accordion">
                <div className="image-box">
                    <img src={logo} alt="" />
                </div>
                <div className="accordion-text">
                    <div className="title">FAQ</div>
                    <ul className="faq-text">
                        <li className={toggleState} onClick={handleClick}>
                            <div className="question-arrow">
                                <span className="question">Who Can Use This Website?</span>
                                <i className="bx bxs-chevron-down arrow"></i>
                            </div>
                            <Fade top cascade when={btnState}>
                            <p>This website is used by a freelancer that consumes knowledge to fill client's request or a client who needs a system/website/project for school.</p>
                            </Fade>
                            <span className="line"></span>
                        </li>
                        <li className={toggleState2} onClick={handleClick2}>
                            <div className="question-arrow">
                                <span className="question">What does SE Stands For?</span>
                                <i className="bx bxs-chevron-down arrow"></i>
                            </div>
                            <Fade top cascade when={btnState2}>
                            <p>SE is a short term for Self Employed. This platform can be a home for all of freelancer where they can showcase their skill and at the same time earn.</p>
                            </Fade>
                            <span className="line"></span>
                        </li>
                        <li className={toggleState3} onClick={handleClick3}>
                            <div className="question-arrow">
                                <span className="question">Can I Use This Website For Free?</span>
                                <i className="bx bxs-chevron-down arrow"></i>
                            </div>
                            <Fade top cascade when={btnState3}>
                            <p>If you are here to inquire and look for a freelancer and check the skills and showcase of every freelancer that is absolutely free. The fee only starts when you start requesting a project and the reason is we are ensuring that every transaction is sure and will not waste anybody's time.</p>
                            </Fade>
                            <span className="line"></span>
                        </li>
                        <li className={toggleState4} onClick={handleClick4}>
                            <div className="question-arrow">
                                <span className="question">How To Apply As A Freelancer?</span>
                                <i className="bx bxs-chevron-down arrow"></i>
                            </div>
                            <Fade top cascade when={btnState4}>
                            <p>We will always post job offer if we are in need of employee or a freelancer. While there is no job posting on this page no one can apply as a freelancer.</p>
                            </Fade>
                            <span className="line"></span>
                        </li>
                        <li className={toggleState5} onClick={handleClick5}>
                            <div className="question-arrow">
                                <span className="question">How Can I Ensure That This Is Not Scam?</span>
                                <i className="bx bxs-chevron-down arrow"></i>
                            </div>
                            <Fade top cascade when={btnState5}>
                            <p>Every registered user here will be verified by checking their IDs. Freelancer will show their past works in this website or outside this platform / portfolio. All clients who is in need of services/freelancers required to pay at least 10% of the cost of the whole project before proceeding so freelancers won't waste their time.</p>
                            </Fade>
                            <span className="line"></span>
                        </li>
                    </ul>
                </div>
            </div>
            </Fade>
        </section>
    );
}

export default Faq;