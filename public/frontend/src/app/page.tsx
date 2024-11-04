import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
	return (
		<Flex
			height={"100vh"}
			bgColor={"grey"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				w="fit-content"
				padding={4}
				bgColor={"primary"}
				borderRadius={"8px"}
			>
				<FormControl mb={2}>
					<FormLabel mb={1} color={'white'}>Usuário</FormLabel>
					<Input bg={'white'} px={2} />
				</FormControl>

				<FormControl mb={2}>
					<FormLabel color={'white'} mb={1}>Senha</FormLabel>
					<Input type="password" bg={'white'} px={2} />
				</FormControl>

				<Link href={"/home"}>
				<Button variant={"secondary"}>Login</Button>
				</Link>
			</Box>
		</Flex>
	);
}
