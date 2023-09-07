export const Select = ({ options, onSelect }) => {
	return (
		<select onChange={onSelect}>
			<option value={""}>Options</option>
			{options.map((opt) => (
				<option key={opt.id} value={opt.value}>
					{opt.name}
				</option>
			))}
		</select>
	);
};
