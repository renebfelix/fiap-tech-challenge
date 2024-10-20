import { useMainContext } from "@/contexts/mainContext";
import { Box, Button, ModalBody, ModalFooter } from "@chakra-ui/react";

export function ModalAdd(){
	const { controlModal } = useMainContext();

	return (
		<Box>
			<ModalBody>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni tempora laudantium vel expedita voluptatem, qui quo corporis nulla repellat cupiditate accusantium optio, aperiam molestiae explicabo ipsa eaque fugit impedit.
			</ModalBody>

			<ModalFooter gap={2} p={2} borderTop={"1px solid"} borderTopColor={"grey"}>
				<Button
					variant={"outline"}
					onClick={() => controlModal.onClose()}
				>
					Cancelar
				</Button>

				<Button variant={"primary"}>Adicionar</Button>
			</ModalFooter>
		</Box>
	)
}
