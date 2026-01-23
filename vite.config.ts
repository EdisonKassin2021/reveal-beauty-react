import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ IMPORTANT: Remplacer 'REAVEAL-BEAUTY' par le nom exact de votre repository GitHub
  // Si vous utilisez un domaine personnalisé, mettre base: '/'
  base: "/REAVEAL-BEAUTY/",
});
