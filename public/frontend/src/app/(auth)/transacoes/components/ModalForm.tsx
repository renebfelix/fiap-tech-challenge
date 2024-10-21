"use client";

import { ErrorTextForm } from "@/components/ErrorTextForm/ErrorTextForm";
import { useMainContext } from "@/contexts/mainContext";
import { updateBalance } from "@/services/updateBalance";
import { TransactionsProps } from "@/types/transactions";
import { Box, Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { CurrencyInput } from "react-currency-mask";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuidV4 } from "uuid";

export function ModalForm({ edit }: Readonly<{edit?: TransactionsProps}>){
	const { controlModal, setTransactions, setBalance } = useMainContext();
	const { handleSubmit, register, formState: { errors }, control, reset, setValue } = useForm();

	useEffect(() => {
		if(edit){
			setValue("name", edit.name);
			setValue("value", edit.value);
			setValue("type", edit.type);
		}
	}, []);

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(async (data) => {
				const url = edit ? "/"+edit.id : "";

				const response = await fetch(`http://localhost:3001/transactions${url}`, {
					method: edit ? "PUT" : "POST",
					body: JSON.stringify({
						...data,
						date: new Date(),
						id: uuidV4()
					})
				});

				if(response.ok){

					if(edit){
						controlModal.onClose();
					} else {
						reset();
					}

					const responseBusca = await fetch(`http://localhost:3001/transactions`, {
						method: "GET",
					});

					if (responseBusca.ok){
						const data = await responseBusca.json();
						setTransactions(data);
						setBalance(updateBalance(data));
					}
				} else {
					alert("ERRO")
				}
			})}
		>
			<ModalBody>
				<FormControl mb={2}>
					<FormLabel mb={1}>Titulo da transação</FormLabel>
					<Select
						{...register("type", {
							required: {
								value: true,
								message: "Campo obrigatório"
							}
						})}
					>
						<option value="">Selecione</option>
						<option value="ENTRADA">Entrada</option>
						<option value="SAIDA">Saída</option>
					</Select>

					{errors.name && <ErrorTextForm {...errors.name} />}
				</FormControl>

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
					<Controller
							name="value"
							control={control}
							rules={{
								required: {
									value: true,
									message: "Campo obrigatório"
								}
							}}
							render={({field}) => (
								<CurrencyInput
									value={field.value}
									InputElement={
										<Input px={2} type="text" {...field} />
									}
									onChangeValue={(_: unknown, value: unknown) => {
										field.onChange(value);
									}}
								></CurrencyInput>
							)}
						/>

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

				<Button type="submit" variant={"primary"}>
					{edit ? "Editar" : "Adicionar"}
				</Button>
			</ModalFooter>
		</Box>
	)
}
