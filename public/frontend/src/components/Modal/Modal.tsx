import { useMainContext } from "@/contexts/mainContext";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton} from "@chakra-ui/react";

export function ModalDefault(){
	const { controlModal, modalComponent } = useMainContext();

	return (
		<Modal
			isOpen={controlModal.isOpen}
			onClose={controlModal.onClose}
			size={"xl"}
		>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader
					p={2}
					borderBottom={"1px solid"}
					borderBottomColor={"grey"}
				>
					{modalComponent.title}
				</ModalHeader>

				<ModalCloseButton />

				{modalComponent.bodyComponent}
			</ModalContent>
		</Modal>
	)
}
