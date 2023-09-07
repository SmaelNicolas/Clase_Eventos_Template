import { useState } from "react";
import "./form.css";

export const Form = () => {
	const [userData, setUserData] = useState({
		name: "",
		lastName: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		lastName: "",
	});

	const handleKey = (evento) => {
		console.log(evento.key);
	};

	const handleFocus = (evento) => {
		const inputName = evento.target.name;
		console.warn(`Focus en ${inputName}`);
	};

	const handleBlur = (evento) => {
		const inputName = evento.target.name;
		const inputValue = evento.target.value;

		inputValue.length < 3 || inputValue.length > 15
			? setErrors({
					...errors,
					[inputName]: `${inputName} debe contener de 3 a 15 caracteres`,
			  })
			: setErrors({
					...errors,
					[inputName]: "",
			  });
	};

	const handleChange = (evento) => {
		const inputName = evento.target.name;
		const inputValue = evento.target.value;
		setUserData({ ...userData, [inputName]: inputValue });
	};

	const handleSubmit = (evento) => {
		evento.preventDefault();
		if (userData.name === "" || userData.lastName === "") return;

		console.log("Enviando data al backend");
		setUserData({ name: "", lastName: "" });
	};

	return (
		<div className="container--app">
			<h2>Formulario</h2>
			<form className="form" onSubmit={handleSubmit}>
				<label className="label">
					Name
					<input
						className="input"
						placeholder="Ingrese su nombre"
						name="name"
						type="text"
						value={userData.name}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						onKeyDown={handleKey}
					/>
					<p className="error">{errors.name}</p>
				</label>
				<label className="label">
					Last Name
					<input
						type="text"
						className="input"
						placeholder="Ingrese su apellido"
						name="lastName"
						value={userData.lastName}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
						onKeyDown={handleKey}
					/>
					<p className="error">{errors.lastName}</p>
				</label>
				<button type="submit" className="custom-btn btn-11">
					<span>Enviar</span>
				</button>
			</form>
		</div>
	);
};
