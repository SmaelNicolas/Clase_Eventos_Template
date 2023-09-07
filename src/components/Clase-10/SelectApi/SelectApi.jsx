import { useState } from "react";
import { primeros150Pokemons } from "../../../data/pokemons";
import { Select } from "../Select/Select";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import "./selectApi.css";

export const SelectApi = () => {
	const [pokemon, setPokemon] = useState(null);

	const handleChange = async (evento) => {
		const pokeName = evento.target.value;
		if (!pokeName) return;

		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
			);
			const data = await response.json();
			setPokemon(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="container--app container--api">
			<h3>APi Pokemon Select</h3>
			<Select options={primeros150Pokemons} onSelect={handleChange} />
			{pokemon && <PokemonCard pokemon={pokemon} />}
		</div>
	);
};
