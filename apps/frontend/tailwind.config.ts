/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				fade: "fadeIn 2s ease-in-out",
				slideshow_0: "slideshow 8s linear infinite",
				slideshow_1: "slideshow 8s linear -1s infinite",
				slideshow_2: "slideshow 8s linear -2s infinite",
				slideshow_3: "slideshow 8s linear -3s infinite",
				slideshow_4: "slideshow 8s linear -4s infinite",
				slideshow_5: "slideshow 8s linear -5s infinite",
				slideshow_6: "slideshow 8s linear -6s infinite",
				slideshow_7: "slideshow 8s linear -7s infinite",
			},
			keyframes: (theme: any) => ({
				fadeIn: {
					"100%": { opacity: 1 },
					"0%": { opacity: 0 },
				},
				slideshow: {
					// fade in
					"0%": {
						opacity: 0,
						transform: "translateY(-128px)",
						color: theme("colors.zinc.700"),
						"font-size": theme("fontSize.9xl"),
					},
					// text-zinc-900 text-9xl
					"12.5%": {
						opacity: 1,
						transform: "translateY(0px)",
					},
					//text-neutral-800 text-8xl
					"25%": {
						transform: "translateY(133px)",
						color: theme("colors.neutral.600"),
						"font-size": theme("fontSize.8xl"),
					},
					// text-neutral-700 text-8xl
					"37.5%": {
						transform: "translateY(232px)",
						color: theme("colors.neutral.500"),
						"font-size": theme("fontSize.8xl"),
					},
					// text-neutral-600 text-9xl
					"50%": {
						transform: "translateY(328px)",
						color: theme("colors.neutral.400"),
						"font-size": theme("fontSize.9xl"),
					},
					// text-zinc-800 text-8xl
					"62.5%": {
						transform: "translateY(424px)",
						color: theme("colors.zinc.600"),
						"font-size": theme("fontSize.8xl"),
					},
					// text-neutral-800 text-8xl
					"75%": {
						transform: "translateY(520px)",
						color: theme("colors.neutral.600"),
						"font-size": theme("fontSize.8xl"),
					},
					// text-neutral-700 text-8xl
					"87.5%": {
						transform: "translateY(616px)",
						color: theme("colors.neutral.500"),
						"font-size": theme("fontSize.8xl"),
					},
					// fade out
					"100%": {
						opacity: 0,
						transform: "translateY(712px)",
						"font-size": theme("fontSize.8xl"),
						color: theme("colors.neutral.500"),
					},
				},
			}),
		},
		screens: {
			"sm-exclusive": { max: "639px" },
			// => @media (max-width: 639px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			"md-exclusive": { max: "767px", min: "640px" },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			"lg-exclusive": { max: "1023px", min: "768px" },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			"xl-exclusive": { max: "1279px", min: "1024px" },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl-exclusive": { max: "1535px", min: "1280" },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
