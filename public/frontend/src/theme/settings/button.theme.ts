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
		},
		circlePrimary: {
			borderRadius: "100%",
			backgroundColor: "primary",

			_hover: {
				backgroundColor: "grey",
				color: "primary",
			}
		},
		circleSecondary: {
			borderRadius: "100%",
			backgroundColor: "secondary",

			_hover: {
				opacity: 0.8,
			},
		},
		circleOutlineSecondary: {
			borderRadius: "100%",
			backgroundColor: "none",
			border: "1px solid",
			borderColor: "secondary",
			color: "secondary",

			_hover: {
				opacity: 0.8,
			},
		},
	},
});
