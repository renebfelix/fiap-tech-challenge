import { extendTheme } from "@chakra-ui/react";
import { colorsTheme } from "./settings/colors.theme";
import { textTheme } from "./settings/text.theme";
import { buttonTheme } from "./settings/button.theme";
import { spacingTheme } from "./settings/spacing.theme";
import { selectTheme } from "./settings/select.theme";
import { fontWeightTheme } from "./settings/fontweight.theme";

export const theme = extendTheme({
	colors: colorsTheme,
	space: spacingTheme,
	components: {
		Text: textTheme,
		Button: buttonTheme,
		Select: selectTheme,
	},
});
