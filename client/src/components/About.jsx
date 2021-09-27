import "./header.css";
import logo from "./logo.svg";

export default function Header(props) {
	return (
		<main>
			<img src={logo} alt="kahoot! logo" />
			<p>is a interactive quiz website made for students and educational institutes.</p>
		</main>
	)
}