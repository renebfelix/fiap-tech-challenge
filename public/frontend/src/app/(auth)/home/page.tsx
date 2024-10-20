import { Balance } from "@/components/Balance/Balance";
import { Box, Heading, } from "@chakra-ui/react";

export default function Page() {
	return (
		<Box>
			<Heading mb={3}>Olá, Joana</Heading>

			<Balance balance={150} />
		</Box>
	);
}
