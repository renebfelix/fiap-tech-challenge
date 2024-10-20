"use client";

import { Transactions } from "@/components/Transactions/Transactions";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { Box, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { ModalAdd } from "./components/ModalAdd";
import { useEffect, useState } from "react";


export default function TransacoesPage(){
	const { showValues, setShowValues, setModalComponent, controlModal } = useMainContext();
	const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);

	async function getTransactions() {
		const response = await fetch(`http://localhost:3001/transactions`, {
			method: "GET"
		});

		const data: Array<TransactionsProps> = await response.json();
		setTransactions(data);
	}

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<Box bgColor={"white"} p={3}>
			<Flex mb={3} justifyContent={"space-between"} alignItems={"center"}>
				<Heading as={"h1"}>Transações</Heading>

				<Flex gap={2}>
					<Button
						leftIcon={<FaPlus />}
						variant={"secondary"}
						onClick={() => {
							setModalComponent({
								title: "Adicionar transação",
								bodyComponent: <ModalAdd />
							});

							controlModal.onOpen();
						}}
					>
						Adicionar
					</Button>

					<IconButton
						icon={showValues ? <FaEyeSlash /> : <FaEye />}
						variant={"circleOutlineSecondary"}
						aria-label="Ocultar/Exibir saldo"
						onClick={() => setShowValues(!showValues)}
					/>
				</Flex>
			</Flex>

			<Flex flexDir={"column"} gap={1}>
				{transactions.map((transacao) => {
					return <Transactions key={transacao.id} {...transacao} />
				})}
			</Flex>
		</Box>
	)
}
