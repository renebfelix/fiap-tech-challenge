import { useMainContext } from "@/contexts/mainContext";
import { updateBalance } from "@/services/updateBalance";
import { TransactionsProps } from "@/types/transactions";
import { Box, Button, ModalBody, ModalFooter } from "@chakra-ui/react";

export function ModalDelete({transacao}: Readonly<{ transacao: TransactionsProps }>){
	const { controlModal, setTransactions, setBalance } = useMainContext();

	async function handleDelete(transacao: TransactionsProps){
		const response = await fetch(`http://localhost:3001/transactions/${transacao.id}`, {
			method: "DELETE",
		});

		if (response.ok) {
			const responseBusca = await fetch(`http://localhost:3001/transactions`, {
				method: "GET",
			});

			if (responseBusca.ok){
				const data = await responseBusca.json();
				setTransactions(data);
				setBalance(updateBalance(data));
			}

			controlModal.onClose();
		}
	}

	return (
		<Box>
			<ModalBody>
				Você tem certeza que deseja excluír <strong>{transacao.name}</strong>? Esta ação não poderá ser desfeita.
			</ModalBody>

			<ModalFooter gap={2} p={2} borderTop={"1px solid"} borderTopColor={"grey"}>
				<Button
					variant={"outline"}
					type="button"
					onClick={() => controlModal.onClose()}
				>
					Cancelar
				</Button>

				<Button type="submit" variant={"primary"} onClick={() => handleDelete(transacao)}>
					Deletar
				</Button>
			</ModalFooter>
		</Box>
	)
}
