"use client";

import { Balance } from "@/components/Balance/Balance";
import { useMainContext } from "@/contexts/mainContext";
import { Box, Heading, } from "@chakra-ui/react";

export default function Page() {
	const { balance } = useMainContext();

	return (
		<Box>
			<Heading mb={3}>Olá, Joana</Heading>

			<Balance balance={balance} />
		</Box>
	);
}
