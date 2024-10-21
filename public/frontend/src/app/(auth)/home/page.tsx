"use client";

import { Balance } from "@/components/Balance/Balance";
import { Transactions } from "@/components/Transactions/Transactions";
import { useMainContext } from "@/contexts/mainContext";
import { Box, Flex, Heading, Text, } from "@chakra-ui/react";

export default function Page() {
	const { balance, transactions } = useMainContext();

	return (
		<Box>
			<Heading mb={3}>Olá, Joana</Heading>

			<Balance balance={balance} />

			<Box p={2} bgColor={"white"} mt={2}>
				<Text mb={2}>Últimas transações</Text>

				<Flex flexDirection={"column"} gap={2}>
					{transactions.toReversed().map((transacao, index) => {
						return index <= 2 && <Transactions key={transacao.id} mode="BASIC" transactions={transacao} />
					})}
				</Flex>
			</Box>

		</Box>
	);
}
