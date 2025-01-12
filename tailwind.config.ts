import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [typography],
    theme: {
    	extend: {
    		animation: {
    			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
    		},
    		keyframes: {
    			'border-beam': {
    				'100%': {
    					'offset-distance': '100%'
    				}
    			}
    		}
    	}
    }
};

export default config;
