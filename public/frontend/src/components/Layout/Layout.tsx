"use client";

import { ReactNode, useEffect } from "react";
import { Sidenav } from "../Sidenav/Sidenav";
import { SidenavLinksProps } from "@/types/sidenav";
import { FaHome } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { ModalDefault } from "../Modal/Modal";
import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { updateBalance } from "@/services/updateBalance";

export function Layout(params: Readonly<{children: ReactNode}>){
	const {setBalance, setTransactions} = useMainContext();

	const linksSidenav: Array<SidenavLinksProps> = [
		{id: 1, title: "Início", href: "/home", icon: <FaHome />},
		{id: 2, title: "Transações", href: "/transacoes", icon: <FaHome />},
		{id: 3, title: "Investimentos", href: "#", icon: <FaHome />},
		{id: 4, title: "Outros serviços", href: "#", icon: <FaHome />},
	];

	async function getTransactions() {
		const response = await fetch(`http://localhost:3001/transactions`, {
			method: "GET"
		});

		const data: Array<TransactionsProps> = await response.json();
		setTransactions(data);
		setBalance(updateBalance(data));
	}

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<Box bgColor={"grey"} minH={"100vh"}>
			<Header links={linksSidenav} />

			<Flex
				gap={2}
				mx={"auto"}
				maxW={"1024px"}
				mt={3}
			>
				<Sidenav links={linksSidenav} />

				<Box width={"full"} paddingX={3}>
					{params.children}
				</Box>
			</Flex>

			<ModalDefault />
		</Box>
	)
}
