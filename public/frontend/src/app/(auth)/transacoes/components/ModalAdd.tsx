"use client";

import { ErrorTextForm } from "@/components/ErrorTextForm/ErrorTextForm";
import { useMainContext } from "@/contexts/mainContext";
import { Box, Button, FormControl, FormLabel, Input, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";

export function ModalAdd(){
	const { controlModal } = useMainContext();
	const { handleSubmit, register, formState: { errors } } = useForm();

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(async (data) => {
				fetch(`http://localhost:3001/transactions`, {
					method: "POST",
					body: JSON.stringify({
						...data,
						id: uuidV4()
					})
				});
			})}
		>
			<ModalBody>
				<FormControl mb={2}>
					<FormLabel mb={1}>Titulo da transação</FormLabel>
					<Input {...register("name", {
						required: {
							value: true,
							message: "Campo obrigatório"
						}
					})} px={2} />

					{errors.name && <ErrorTextForm {...errors.name} />}
				</FormControl>

				<FormControl>
					<FormLabel mb={1}>Valor da transação</FormLabel>
					<Input {...register("value", {
						required: {
							value: true,
							message: "Campo obrigatório"
						}
					})} px={2} />

					{errors.value && <ErrorTextForm {...errors.value} />}
				</FormControl>
			</ModalBody>

			<ModalFooter gap={2} p={2} borderTop={"1px solid"} borderTopColor={"grey"}>
				<Button
					variant={"outline"}
					type="button"
					onClick={() => controlModal.onClose()}
				>
					Cancelar
				</Button>

				<Button type="submit" variant={"primary"}>Adicionar</Button>
			</ModalFooter>
		</Box>
	)
}
