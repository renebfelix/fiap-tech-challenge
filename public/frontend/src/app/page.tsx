import Header from "@/components/Header";
import { Box, Text, Button, Select, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function Page() {
	return (
		<>
			<Header />
			<Box>
				<Text variant="small">Extrato</Text>
				<Text variant="title">Extrato</Text>

				<Button marginBottom={3} variant="primary">
					teste button
				</Button>
				<Button marginBottom={"large"} variant="secondary">
					teste button
				</Button>

				<Select variant="primary">
					<option value={""}>Selecione</option>
					<option value={"Opção 1"}>Opção 1</option>
					<option value={"Opção 2"}>Opção 2</option>
				</Select>

				<IconButton
					variant={"circleOutlineSecondary"}
					icon={<FaSearch />}
					aria-label="Search"
				/>
			</Box>
		</>
	);
}
