import { TransactionsProps } from "@/types/transactions";
import { moneyCurrency } from "@/utils/moneyCurrency";
import { ModalBody, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import moment from "moment";

export function ModalDetails({transaction}: Readonly<{transaction: TransactionsProps}>){
	return (
		<ModalBody>
			<Table variant={"striped"}>
				<Tbody>
					<Tr>
						<Td fontWeight={"bold"}>Tipo:</Td>
						<Td>{transaction.type === "ENTRADA" ? "Depósito" : "Transferência"}</Td>
					</Tr>
					<Tr>
						<Td fontWeight={"bold"}>Nome</Td>
						<Td>{transaction.name}</Td>
					</Tr>
					<Tr>
						<Td fontWeight={"bold"}>Data</Td>
						<Td>{moment(transaction.date).format("DD/MM/YYYY")}</Td>
					</Tr>
					<Tr>
						<Td fontWeight={"bold"}>Valor</Td>
						<Td>{moneyCurrency(transaction.value)}</Td>
					</Tr>
				</Tbody>
			</Table>
		</ModalBody>
	)
}
