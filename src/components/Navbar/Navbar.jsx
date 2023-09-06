import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

const urls = [
	{ id: 1, name: "Keyboards", path: "/category/keyboard" },
	{ id: 2, name: "Mouses", path: "/category/mouse" },
	{ id: 3, name: "Pads", path: "/category/pad" },
	{ id: 4, name: "Eventos Manuales", path: "eventosmanuales" },
	{ id: 5, name: "Eventos Automaticos", path: "eventosautomaticos" },
	{ id: 6, name: "Form", path: "form" },
	{ id: 7, name: "Vocals", path: "inputvocals" },
	{ id: 8, name: "Select", path: "select" },
	{ id: 9, name: "Select Api", path: "selectapi" },
];

export const Navbar = () => {
	return (
		<nav className="container--navbar">
			<Link to="/" className="navbar--logo">
				🪐
			</Link>

			<ul className="navbar--ul">
				{urls.map(({ id, name, path }) => (
					<li key={id} className="navbar--ul--li">
						<Link to={`${path}`} className="navbar--ul--li--a">
							{name}
						</Link>
					</li>
				))}
			</ul>
			<CartWidget />
		</nav>
	);
};
