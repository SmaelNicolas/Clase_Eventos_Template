import { useState } from "react";
import "./pokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
	const [image, setImage] = useState(true);
	return (
		<div className="card-container">
			<div className="pokemon-container">
				<div className="power-level">
					Number - <span>{pokemon.id}</span>
					<div className="pokemon-snap">
						{image ? (
							<img
								onMouseEnter={() => setImage(false)}
								src={
									pokemon.sprites.other["official-artwork"]
										.front_default
								}
							/>
						) : (
							<img
								onMouseLeave={() => setImage(true)}
								src={
									pokemon.sprites.other["official-artwork"]
										.front_shiny
								}
							/>
						)}
					</div>
					<div className="half-circle"></div>
				</div>

				<div className="poke-card">
					<div className="name">
						<h1>{pokemon.name}</h1>
						<div className="hp">
							{pokemon.stats
								.map(
									(stat) =>
										`${stat.stat.name} : ${stat.base_stat}`
								)
								.join(" - ")}
						</div>
					</div>

					<ul className="stats">
						<li>
							{pokemon.types
								.map((type) => type.type.name)
								.join(" / ")}
							<br />
							<span>Type</span>
						</li>
						<li>
							{pokemon.weight} kg
							<br />
							<span>Weight</span>
						</li>
						<li>
							{pokemon.height}m
							<br />
							<span>Height</span>
						</li>
					</ul>

					<ul className="abilities">
						{pokemon.abilities.map((ability) => (
							<li>
								{ability.ability.name}
								<br />
								<span className="power">
									Slot : {ability.slot}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
