import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	selectAnatomy.keys,
);

const primaryButton = definePartsStyle({
	field: {
		background: "white",
		border: "1px solid",
		borderColor: "primary",
		color: "primary",
		paddingLeft: 1,
		borderRadius: "8px"
	},
	icon: {
		color: "primary",
	}
})

export const selectTheme = defineMultiStyleConfig({
	variants: {
		primary: primaryButton
	}
})
