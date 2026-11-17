import { useEffect, useState } from "react";

// Lit l'agenda défini dans public/events/events.js (window.DYDY_EVENTS).
// useEffect ne s'exécute que dans le navigateur : la génération HTML
// (Node.js, sans window) ne plante pas.
// Retourne null tant que l'agenda n'est pas encore lu.
export function useEvents() {
	const [events, setEvents] = useState(null);

	useEffect(() => {
		setEvents(window.DYDY_EVENTS || []);
	}, []);

	return events;
}
