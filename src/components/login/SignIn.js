import './SignIn.css';
import logo from '../../assets/image/SignIn/main-logo-1.png';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import qr from '../../assets/image/SignIn/qr-code.png';
import Fade from 'react-reveal/Fade';

function SignIn() {

    const [error, setError] = useState(false);
    const [blur, setBlur] = useState(false);
    const [hide, setHide] = useState(true);
    const [password, setPassword] = useState('');
    const [username, setUser] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    function handleLogin(e) {
        e.preventDefault();
        if(!error) {
            setError(true);
            setTimeout( () => {
                setError(false);
              }, 5000);
        }

        username.trim();
        password.trim();
    }

    function revealPassword() {
        if(passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    function closeQR() {
        setBlur(false);
        setHide(true);
    }

    function generateQR(e) {
        e.preventDefault();
        setBlur(true);
        setHide(false);
    }

    function handleChangeUser(e) {
        setUser(e.target.value);
    }

    function handleChangePass(e) {
        setPassword(e.target.value);
    }


    return(
        <section className="Login">
            <div className="leftBG"></div>
            <div className="rightBG"></div>
            <div className={hide ? "hide" : "show qrBox"}>
                <div className="content">
                        <img src={qr} alt="" />
                        <div className="line"></div>
                        <i class="gg-scan scan"></i>
                        <div className='scanQr'>Scan the QR code to Log in</div>
                        <div className="trouble">Having trouble with the QR code?</div>
                        <center><button>Generate new QR code</button></center>
                        <i class="gg-close close" onClick={closeQR}></i>
                    
                </div>
            </div>
            <div className={blur ? "modalBox blur" : "modalBox"}>
                <div className="content">
                    <div className="left">
                        
                        <Fade cascade when={!blur}>
                        <img src={logo} alt="" />
                            <div className="message">
                                
                                <h1>Welcome<br/>Back!</h1>
                                <p>You don't have an account?</p>
                            </div>
                            <button><p>Create account</p></button>
                        </Fade>
                    </div>
                    <div className="right">
                        <i class={passwordType === "password" ? "gg-eye-alt password-eye" : "gg-eye password-eye"} onClick={revealPassword}></i>
                        <Fade cascade when={!blur}>
                            <h1>Log in</h1>
                            <p>Please input your credentials to log in to your account.</p>
                        </Fade>
                        <Fade bottom collapse when={error}>
                            <span className={error ? "notFound" : "notFoundNotSet"}>Login Error!!</span>
                        </Fade>    
                        <form>
                            <fieldset className="radio">
                                <div className="inner-radio">
                                    <input type="radio" name="usertype" id="client" checked/><label htmlFor="client">Client</label>
                                </div>
                                <div className="inner-radio">
                                    <input type="radio" name="usertype" id="freelancer"/><label htmlFor="freelancer">Freelancer</label>
                                </div>
                            </fieldset>

                            <div className="user form-design">
                                <div className="form-input">
                                    <label htmlFor="user">Username</label>
                                    <input className={error && "input-error"} onChange={handleChangeUser} type="text" name="user" placeholder='Username'/>
                                </div>
                            </div>
                            
                            <div className="password form-design">
                                <div className="form-input">
                                    <label htmlFor="pass">Password</label>
                                    <input className={error && "input-error"} onChange={handleChangePass} type={passwordType} name="pass" placeholder='Password'/>
                                </div>
                            </div>

                            <div className="other">
                                <div className="remember-me">
                                    <input type="checkbox" name="remember" /><label htmlFor="remember">Remember me</label>
                                </div>
                                <div className="forgot-pass">
                                    <Link to="#">Forgot password?</Link>
                                </div>
                            </div>

                            <button class="login" onClick={handleLogin}>Log In</button>
                            <div className="divider">
                                <div className="line"></div>
                                <div className="message">or</div>
                                <div className="line"></div>
                            </div>

                            <button class="qr" onClick={generateQR}>Generate QR code</button>
                            <div className="statement">
                                Scan QR code with your mobile device to log in to your account instantly.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;