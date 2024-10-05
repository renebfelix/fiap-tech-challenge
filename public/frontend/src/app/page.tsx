import { Box, Text, Button, Select } from "@chakra-ui/react";

export default function Page() {
	return (
		<Box>
			<Text variant="small">Extrato</Text>
			<Text variant="title">Extrato</Text>

			<Button marginBottom={3} variant="primary">teste button</Button>
			<Button marginBottom={"large"} variant="secondary">teste button</Button>

			<Select variant="primary">
				<option value={""}>Selecione</option>
				<option value={"Opção 1"}>Opção 1</option>
				<option value={"Opção 2"}>Opção 2</option>
			</Select>
		</Box>
	);
}
