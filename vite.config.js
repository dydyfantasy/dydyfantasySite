import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
	// imagetools : redimensionne / convertit les images importées avec ?w=...&format=...
	// (utilisé par le carrousel de l'accueil pour optimiser les photos déposées telles quelles)
	plugins: [tailwindcss(), imagetools(), reactRouter()],
});
