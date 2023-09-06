import { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ item }) => {
	const [enter, setEnter] = useState(false);

	const handleEnter = (value) => {
		setEnter(value);
	};

	return (
		<div
			onMouseEnter={() => handleEnter(true)}
			onMouseLeave={() => handleEnter(false)}
			className={`card ${enter ? "card--scale" : ""}`}>
			<h3 className="card--title">{item.title}</h3>
			<img className="card--img" src={item.img} alt={item.title} />
			<div className="card--price">$ {item.price}</div>
			<Link className="card--more" to={`/items/${item.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};
