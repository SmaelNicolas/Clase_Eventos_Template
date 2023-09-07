import { useEffect } from "react";
import "./events.css";

export const EventsManuals = () => {
	const handleClick = (evento) => {
		evento.stopPropagation();
		console.log(evento.target.className);
	};

	const handleResize = () => {
		console.log(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("click", handleClick);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("click", handleClick);
			window.removeEventListener("resize", handleResize);
			console.log("SE desmonto el componente");
		};
	}, []);

	return (
		<div className="container--app">
			<h2>Eventos Manuales</h2>

			<div className="box--click" onClick={handleClick}>
				<p className="box--click--text">Click me!</p>
			</div>
		</div>
	);
};
