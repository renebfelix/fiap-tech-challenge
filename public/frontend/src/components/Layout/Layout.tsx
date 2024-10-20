"use client";

import { ReactNode } from "react";
import { Sidenav } from "../Sidenav/Sidenav";
import { SidenavLinksProps } from "@/types/sidenav";
import { FaHome } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { ModalDefault } from "../Modal/Modal";

export function Layout(params: Readonly<{children: ReactNode}>){
	const linksSidenav: Array<SidenavLinksProps> = [
		{id: 1, title: "Início", href: "/home", icon: <FaHome />},
		{id: 2, title: "Transações", href: "/transacoes", icon: <FaHome />},
		{id: 3, title: "Investimentos", href: "#", icon: <FaHome />},
		{id: 4, title: "Outros serviços", href: "#", icon: <FaHome />},
	];

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

				<Box width={"full"}>
					{params.children}
				</Box>
			</Flex>

			<ModalDefault />
		</Box>
	)
}
