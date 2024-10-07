import { ReactNode } from "react";
import { Sidenav } from "../Sidenav/Sidenav";
import { SidenavLinksProps } from "@/types/sidenav";
import { FaHome } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../Header/Header";

export function Layout(params: Readonly<{children: ReactNode}>){
	const linksSidenav: Array<SidenavLinksProps> = [
		{title: "Início", href: "", icon: <FaHome />},
		{title: "Transferências", href: "/transferencias", icon: <FaHome />},
		{title: "Investimentos", href: "/investimentos", icon: <FaHome />},
		{title: "Outros serviços", href: "/outros", icon: <FaHome />},
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
		</Box>
	)
}