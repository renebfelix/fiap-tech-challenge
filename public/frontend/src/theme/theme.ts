import { extendTheme } from "@chakra-ui/react";
import { colorsTheme } from "./settings/colors.theme";
import { textTheme } from "./settings/text.theme";
import { buttonTheme } from "./settings/button.theme";

export const theme = extendTheme({
	colors: colorsTheme,
	components: {
		Text: textTheme,
		Button: buttonTheme,
	},
});
