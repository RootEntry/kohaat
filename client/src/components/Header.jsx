import "./header.css";
import logo from "./logo.svg";

export default function Header(props) {
	const currentPage = props.currentPage;

	return (
		<div className="header">
			<ul className="nav">
				<li><a href="home.html" className={currentPage === "home" ? "navlink active" : "navlink"}>Home</a></li>
				<li><a href="home.html" className={currentPage === "about" ? "navlink active" : "navlink"}>About</a></li>
				<li><a href="home.html" className={currentPage === "features" ? "navlink active" : "navlink"}>Features</a></li>
			</ul>
			<div className="hero">
				<img className="hero-img" src={logo} alt="kohaat! logo" />
				<h2 className="herosubtitle">Revolutionary school quiz software for teachers and organizations.</h2>
				<a href="home.html" className="btn orange">Learn More</a>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,157,0,1)" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,160C640,128,800,64,960,58.7C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
		</div>
	)
}