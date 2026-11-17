import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// Le HTML de la page existe déjà : React s'y "accroche" (hydratation)
// au lieu de tout reconstruire.
hydrateRoot(
	document,
	<StrictMode>
		<HydratedRouter />
	</StrictMode>,
);
