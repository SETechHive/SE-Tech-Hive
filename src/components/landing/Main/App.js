import "./App.css";
import Nav from "./../Nav/Nav.js";
import Footer from "./../Footer/Footer.js";
import Content from "./../Content/Content.js";
import Header from "./../Nav/Header.js";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Faq from "../Content/Faq";
import Services from "../Services/Services";
import Features from "../Features/Features";
import Team from "../Team/Team";
import SignIn from "../../login/SignIn";

function App() {

	return (
		<BrowserRouter>
		<div className="App">
			<Nav />
			<Routes>
				<Route exact path="/" element={
					<><Header /><Services /><Content /><Faq /> <Features/><Team/></>
				}/>
				<Route exact path="/login" element={<SignIn/>}></Route>
			</Routes>
			<Footer/>
		</div>
		</BrowserRouter>
	);
}

export default App;
