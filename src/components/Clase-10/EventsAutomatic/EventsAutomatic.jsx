import { useEffect, useState } from "react";
import { KeepWatching } from "./KeepWatching/KeepWatching";

export const EventsAutomatic = () => {
	const [message, setMessage] = useState(false);

	useEffect(() => {
		let awaitTime = null;

		const resetTimer = () => {
			clearTimeout(awaitTime);
			awaitTime = setTimeout(() => {
				setMessage(true);
			}, 3000);
		};

		const handleUserActivity = () => {
			resetTimer();
		};

		resetTimer();

		window.addEventListener("keydown", handleUserActivity);
		window.addEventListener("mousemove", handleUserActivity);
		window.addEventListener("click", handleUserActivity);

		return () => {
			window.removeEventListener("keydown", handleUserActivity);
			window.removeEventListener("mousemove", handleUserActivity);
			window.removeEventListener("click", handleUserActivity);
		};
	}, []);

	const handleShow = () => {
		setMessage(false);
	};

	return (
		<div>
			<h2>Evento Automatico</h2>
			{message && <KeepWatching onClick={handleShow} />}
		</div>
	);
};
