"use client";

import { SidenavLinksProps } from "@/types/sidenav";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export function NavLink(params: Readonly<SidenavLinksProps>){
	return (
		<Link href={params.href} onClick={() => params.setMobileNavIsOpen(false)}>
			<Flex
				p={2}
				borderBottom={"1px solid"}
				borderColor={"grey"}
				alignItems={"center"}
				gap={2}
				cursor={"pointer"}
				color={"primary"}
				fontWeight={"bold"}
				_hover={{
					bgColor: "grey"
				}}
			>
				{params.icon}
				{params.title}
			</Flex>
		</Link>
	)
}
