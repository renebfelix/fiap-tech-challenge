"use client";

import { Transactions } from "@/components/Transactions/Transactions";
import { useMainContext } from "@/contexts/mainContext";
import { Box, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { ModalForm } from "./components/ModalForm";
import { updateBalance } from "@/services/updateBalance";
import { moneyCurrency } from "@/utils/moneyCurrency";

export default function TransacoesPage(){
	const {
		showValues,
		setShowValues,
		setModalComponent,
		controlModal,
		transactions,
	} = useMainContext();

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
								bodyComponent: <ModalForm />
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

			<Flex justifyContent={"space-between"} mb={2} bgColor={"offwhite"} p={2} border={"1px solid"} borderColor={"grey"}>
				<div>Total</div>
				<strong>{showValues ? moneyCurrency(updateBalance(transactions)) : "R$ ***"}</strong>
			</Flex>

			<Flex flexDir={"column"} gap={1}>
				{transactions.map((transacao) => {
					return <Transactions key={transacao.id} {...transacao} />
				})}
			</Flex>
		</Box>
	)
}
