import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
	baseStyle: {
		color: "white",
		borderRadius: "8px",

		_hover: {
			opacity: 0.8,
		},
	},

	variants: {
		primary: {
			backgroundColor: "primary",
		},
		secondary: {
			backgroundColor: "secondary",
		},
		success: {
			backgroundColor: "success",
		},
		dark: {
			backgroundColor: "black",
		},
	},
});
