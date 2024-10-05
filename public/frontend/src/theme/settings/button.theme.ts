import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
	baseStyle: {
		color: "white",
		borderRadius: "8px",
	},
	variants: {
		primary: {
			backgroundColor: "primary",
			_hover: {
				backgroundColor: "grey",
				color: "primary",
			}
		},
		secondary: {
			backgroundColor: "secondary",

			_hover: {
				opacity: 0.8,
			},
		}
	},
});
