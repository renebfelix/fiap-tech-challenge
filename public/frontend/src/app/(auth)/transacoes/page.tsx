"use client";

import { Transactions } from "@/components/Transactions/Transactions";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { Box, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";


export default function TransacoesPage(){
	const { showValues, setShowValues } = useMainContext();
	const transacoes: Array<TransactionsProps> = [
		{
			id: "3b7ec611-9696-4278-a3d3-df8e5e82b97d",
			date: new Date(),
			name: "Salário",
			type: "ENTRADA",
			value: 1500
		},
		{
			id: "401e7a59-7ee3-44c5-8ad9-79ba98c6934a",
			date: new Date(),
			name: "Salário",
			type: "SAIDA",
			value: -1500
		},
	]

	return (
		<Box bgColor={"white"} p={3}>
			<Flex mb={3} justifyContent={"space-between"} alignItems={"center"}>
				<Heading as={"h1"}>Transações</Heading>

				<Flex gap={2}>
					<Button leftIcon={<FaPlus />} variant={"secondary"}>Adicionar</Button>
					<IconButton
						icon={showValues ? <FaEyeSlash /> : <FaEye />}
						variant={"circleOutlineSecondary"}
						aria-label="Ocultar/Exibir saldo"
						onClick={() => setShowValues(!showValues)}
					/>
				</Flex>
			</Flex>

			<Flex flexDir={"column"} gap={1}>
				{transacoes.map((transacao) => {
					return <Transactions key={transacao.id} {...transacao} />
				})}
			</Flex>
		</Box>
	)
}
