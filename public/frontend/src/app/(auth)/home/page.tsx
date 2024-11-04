"use client";

import { Balance } from "@/components/Balance/Balance";
import { Transactions } from "@/components/Transactions/Transactions";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { Box, Flex, Heading, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Page() {
	const { balance, transactions } = useMainContext();
	const [transactionOrder, setTransactionOrder] = useState<Array<TransactionsProps>>([]);

	useEffect(() => {
		setTransactionOrder(transactions.toReversed());
	}, [transactions]);

	return (
		<Box>
			<Heading mb={3}>Olá, Joana</Heading>

			<Balance balance={balance} />

			<Box p={2} bgColor={"white"} mt={2} borderRadius={"8px"}>
				<Text mb={2}>Últimas transações</Text>

				<Flex flexDirection={"column"} gap={2}>
					{transactionOrder.map((transacao, index) => {
						return index <= 2 && <Transactions key={transacao.id} mode="BASIC" transactions={transacao} />
					})}
				</Flex>
			</Box>

		</Box>
	);
}
