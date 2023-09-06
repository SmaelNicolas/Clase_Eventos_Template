import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCount } from "../../hooks/useCount";
import "./itemCount.css";

export const ItemCount = ({ stock }) => {
	const { count, handleCount, error } = useCount(1, stock);
	const [added, setAdded] = useState(false);

	const onAdd = () => {
		toast(`${count} productos Agregados`, {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			progress: undefined,
			theme: "dark",
		});
		setAdded(true);
	};

	return (
		<div className="container--itemCount">
			{added ? (
				<div className="container--itemCount--buttons">
					<Link className="itemCount--button" to="/">
						Continuar Comprando
					</Link>
					<Link className="itemCount--button" to="/cart">
						Ver Carrito
					</Link>
				</div>
			) : (
				<>
					<div className="container--itemCount--buttons">
						<button
							className="itemCount--button"
							onClick={() => handleCount(-1)}>
							-
						</button>
						<div className="itemCount--count">{count}</div>
						<button
							className="itemCount--button"
							onClick={() => handleCount(1)}>
							+
						</button>
					</div>
					<button className="itemCount--buttonCart" onClick={onAdd}>
						Add to Cart
					</button>
				</>
			)}

			{error && (
				<div className="itemCount--error">
					Se alcanzo el máximo disponible
				</div>
			)}
			<ToastContainer />
		</div>
	);
};
