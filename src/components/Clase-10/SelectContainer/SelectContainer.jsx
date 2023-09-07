import { useState } from "react";
import { Select } from "../Select/Select";
import "./selectContainer.css";

const colors = [
	{
		id: 1,
		name: "Blue",
		value: "blue",
	},
	{
		id: 2,
		name: "Red",
		value: "red",
	},
	{
		id: 3,
		name: "Green",
		value: "green",
	},
];

const animals = [
	{
		id: 1,
		name: "Dog",
		value: "dog",
	},
	{
		id: 2,
		name: "Cat",
		value: "cat",
	},
	{
		id: 3,
		name: "Bird",
		value: "bird",
	},
];

export const SelectContainer = () => {
	const [myColor, setMyColor] = useState("");
	const [myAnimal, setMyAnima] = useState("");

	const handleColor = (evento) => {
		const value = evento.target.value;
		if (!value) return;
		setMyColor(value);
	};
	const handleAnimals = (evento) => {
		const value = evento.target.value;
		if (!value) return;
		setMyAnima(value);
	};

	return (
		<div className="container--app">
			<h2>Select Container</h2>
			<div className="container--select">
				<h3>Colors</h3>
				<Select options={colors} onSelect={handleColor} />
				<div
					className="select--box"
					style={{ background: myColor }}></div>
			</div>
			<div className="container--select">
				<h3>Animales</h3>
				<Select options={animals} onSelect={handleAnimals} />
				<div className={`select--box ${myAnimal}`}></div>
			</div>
		</div>
	);
};
