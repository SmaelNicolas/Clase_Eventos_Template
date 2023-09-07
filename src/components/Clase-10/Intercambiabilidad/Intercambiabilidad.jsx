import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./intercambiabilidad.css";

export const Intercambiabilidad = ({
	item = {
		id: 1,
		stock: 10,
		title: "Gorra",
	},
	inputType = "button",
}) => {
	const ComponenteCount = inputType === "button" ? ButtonCount : InputCount;

	const addToCart = () => {
		console.log("AGregado al carrito");
	};

	return (
		<div className="container--app">
			<h2>Intercambiabilidad</h2>

			<ComponenteCount onConfirm={addToCart} maxQuantity={item.stock} />

			<ToastContainer />
		</div>
	);
};

const InputCount = ({ onConfirm, maxQuantity }) => {
	const [count, setCount] = useState(1);

	const handleChange = (evento) => {
		const value = evento.target.value;
		if (value < 1 || value > maxQuantity) return;
		setCount(value);
	};

	const handleClick = () => {
		onConfirm(count);
		setCount(1);
	};

	return (
		<div className="container--input--count">
			<input
				className="input"
				type="number"
				value={count}
				onChange={handleChange}
			/>
			<button className="custom-btn btn-1" onClick={handleClick}>
				Confirm
			</button>
		</div>
	);
};

const ButtonCount = ({ onConfirm, maxQuantity }) => {
	const [count, setCount] = useState(1);

	const handleCount = (value) => {
		if (count + value < 1 || count + value > maxQuantity) return;
		setCount((prev) => prev + value);
	};

	const handleAdd = () => {
		onConfirm(count);
		setCount(1);
	};

	return (
		<div className="container--int">
			<div className="container--buttons">
				<button
					className="custom-btn btn-1"
					onClick={() => handleCount(-1)}>
					Sacar
				</button>
				<div className="box--count">{count}</div>
				<button
					className="custom-btn btn-1"
					onClick={() => handleCount(1)}>
					Sumar
				</button>
			</div>
			<button className="custom-btn btn-1" onClick={handleAdd}>
				Agregar Al Carrito
			</button>
		</div>
	);
};
