import React, {useRef} from 'react'
import "./Content.css";
import logo from "../../../assets/image/Contents/logo-icon-2.png";
import emailImage from "../../../assets/image/Contents/email.png"
import sendCopy from "../../../assets/image/Contents/send-copy.png";
import Live from "../../../assets/image/Contents/24-hours-phone-service-copy.png";
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';

function Content () {

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const form = useRef();

    function ValidateEmail(mail) 
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail.trim().match(mailformat);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(firstName.current?.value.trim() === '') {
            alert("You must put first name in order to send a message");
            return;
        }

        if(lastName.current?.value.trim() === '') {
            alert("You must put last name in order to send a message");
            return;
        }

        if(email.current?.value.trim() === '') {
            alert("You must put email in order to send a message");
            return;
        }

        if(!ValidateEmail(email.current?.value)) {
            alert("Please put a valid email address");
            return;
        }

        if(message.current?.value.trim() === '') {
            alert("You must put a message in order to send");
            return;
        }

        if(message.current?.value.trim().length < 20) {
            alert("Your message must be 20 characters and above!");
            return;
        } 
        
        emailjs.sendForm('service_s0w5cph', 'template_pu5941p', form.current, 'H7vPfXOB4cjPLwEAO')
          .then((result) => {
                alert("Email has been sent successfully.");
                console.log(result.text);
          }, (error) => {
                alert("Your message could not be delivered due to an error.")
                console.log(error.text);
          });

          e.target.reset();
      };
    
  return (
    <section className="content" id="contact">
        <Fade big>
        <div className="details">
            <img className="logo" src={logo} alt=""/>
            <div className="desc">
                <h2>What is SE Tech Hive?</h2>
                <p>SE Tech Hive is a website platform for both freelancer or self-employed to earn remotely and clients who are in need of help in fixing or creation of a system. Clients could choose a freelancer and freelancers can flex themselves by showing reviews from past clients and the past work that is 24/7 available on the website.</p>
                <center><button>See More →</button></center>
            </div>
        </div>

        <div className="contact">
            <div className="box-1">
                <h2 className="header">Get<br/> in <br/>touch.</h2>
                <h2>_</h2>
                <div id="email" className="row">
                    <img src={emailImage} alt=""/>
                    <div><h3>Email</h3>
                    <p>se_tech_hive@outlook.com</p></div>
                </div>
                <div className="row">
                    <img src={Live} alt=""/>
                    <div><h3>Phone</h3>
                    <p>+63 9679472818</p></div>
                </div>
            </div>
            <div className="box-2">
                <div className="header">
                    <div><p>For your further questions don't hesitate to</p>
                        <h2>send us a message</h2></div>
                    <div>
                        <img src={sendCopy} alt=""/>
                    </div>
                </div>
                <div className="inputs">
                    <form ref={form} onSubmit={sendEmail}>
                        <input ref={firstName} name="first" type="text" id="" placeholder="First Name"/>
                        <input ref={lastName} name="last" type="text" id="" placeholder="Last Name"/>
                        <input ref={email} type="text" name="email_address" id="" placeholder="Email Address"/>
                        <div className="last-part">
                        <textarea ref={message} placeholder="Message" name="message"></textarea>
                        <input type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default Content;


