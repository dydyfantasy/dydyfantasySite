import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
	const location = useLocation();

	useEffect(() => {
		if (!location.hash) return;

		const id = decodeURIComponent(location.hash.replace("#", ""));

		const timeoutId = window.setTimeout(() => {
			const element = document.getElementById(id);

			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}, 150);

		return () => window.clearTimeout(timeoutId);
	}, [location.pathname, location.hash]);

	return null;
}

export default ScrollToHash;
