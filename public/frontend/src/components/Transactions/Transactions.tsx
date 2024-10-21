"use client";

import { ModalDelete } from "@/app/(auth)/transacoes/components/ModalDelete";
import { ModalForm } from "@/app/(auth)/transacoes/components/ModalForm";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { moneyCurrency } from "@/utils/moneyCurrency";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import moment from "moment";
import { FaPen } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function Transactions(params: Readonly<TransactionsProps>){
	const { date, name, type, value } = params;
	const { showValues, setModalComponent, controlModal } = useMainContext();

	return (
		<Box p={"2"} border={"1px solid"} borderColor={"primary"}>
			<Text variant={"small"} as={"h3"}>
				{moment(date).format("DD/M/YYYY")}
			</Text>

			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Text variant={"subtitle"} as={"h3"}>{name}</Text>

				<Flex gap={2} alignItems={"flex-end"}>
					<Text
						variant={"subtitle"}
						color={type === "ENTRADA" ? "success" : "danger"}
						as={"h3"}
					>
						{showValues ? moneyCurrency(value) : "R$ ***"}
					</Text>

					<Flex gap={1}>
						<IconButton
							variant={"circleOutlineSecondary"}
							icon={<FaPen />}
							aria-label="Editar"
							onClick={() => {
								setModalComponent({
									title: "Editar transação",
									bodyComponent: <ModalForm edit={params} />
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
									bodyComponent: <ModalDelete transacao={params} />
								})

								controlModal.onOpen();
							}}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}
