import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const textTheme = defineStyleConfig({
	baseStyle: {
		color: "black",
		fontFamily: "inter",
	},
	variants: {
		title: {
			fontSize: "25px",
		},
		subtitle: {
			fontSize: "20px",
		},
		regular: {
			fontSize: "16px",
		},
		small: {
			fontSize: "13px",
		},
	},
});
