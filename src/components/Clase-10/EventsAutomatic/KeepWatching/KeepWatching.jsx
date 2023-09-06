import "./keepWatching.css";

export const KeepWatching = ({ onClick }) => (
	<div onClick={onClick} className="gradient-border" id="box">
		¿Sigues por ahi ?
		<button className="custom-btn btn-11">Si, aca estoy</button>
	</div>
);
