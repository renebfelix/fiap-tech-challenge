"use client";

import { ModalDelete } from "@/app/(auth)/transacoes/components/ModalDelete";
import { ModalDetails } from "@/app/(auth)/transacoes/components/ModalDetails";
import { ModalForm } from "@/app/(auth)/transacoes/components/ModalForm";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { moneyCurrency } from "@/utils/moneyCurrency";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import moment from "moment";
import { FaEye, FaPen } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function Transactions(params: Readonly<{
	transactions: TransactionsProps,
	mode: "FULL" | "BASIC"
}>){
	const { date, name, type, value } = params.transactions;
	const { showValues, setModalComponent, controlModal } = useMainContext();

	return (
		<Box p={"2"} border={"1px solid"} borderColor={"primary"}>
			<Text variant={"small"} as={"h3"}>
				{moment(date).format("DD/MM/YYYY")}
			</Text>

			<Flex justifyContent={"space-between"} alignItems={{base: 'start', md:"center"}} flexDirection={{base: 'column', md:'row'}}>
				<Text variant={"subtitle"} as={"h3"}>{name}</Text>

				<Flex gap={2} alignItems={"flex-end"} display={{base: 'block', md: 'flex'}}>
					<Text
					 mb={{base: 1, md: 0}}
						variant={"subtitle"}
						color={type === "ENTRADA" ? "success" : "danger"}
						as={"h3"}
					>
						{showValues ? moneyCurrency(value) : "R$ ***"}
					</Text>

					{params.mode === "FULL" && (
						<Flex gap={1}>
							<IconButton
								variant={"circleOutlineSecondary"}
								icon={<FaEye />}
								aria-label="Detalhes"
								onClick={() => {
									setModalComponent({
										title: "Detalhes da transação",
										bodyComponent: <ModalDetails transaction={params.transactions} />
									})

									controlModal.onOpen();
								}}
							/>

							<IconButton
								variant={"circleOutlineSecondary"}
								icon={<FaPen />}
								aria-label="Editar"
								onClick={() => {
									setModalComponent({
										title: "Editar transação",
										bodyComponent: <ModalForm edit={params.transactions} />
									})

									controlModal.onOpen();
								}}
							/>

							<IconButton
								variant={"circleOutlineSecondary"}
								icon={<FaX />}
								aria-label="Deletar"
								onClick={() => {
									setModalComponent({
										title: "Deletar transação",
										bodyComponent: <ModalDelete transacao={params.transactions} />
									})

									controlModal.onOpen();
								}}
							/>
						</Flex>
					) }
				</Flex>
			</Flex>
		</Box>
	)
}
