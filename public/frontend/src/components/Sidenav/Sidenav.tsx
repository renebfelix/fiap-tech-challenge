import { Box } from "@chakra-ui/react";
import { SidenavLinksProps } from "@/types/sidenav";
import { NavLink } from "../NavLink/NavLink";

export function Sidenav(params: Readonly<{ links: Array<SidenavLinksProps> }>){
	return (
		<Box
			bgColor={"white"}
			border={"5px solid"}
			borderColor={"white"}
			height={"100%"}
			w={"100%"}
			maxW={"250px"}
		>
			{params.links.map((item) => {
				return <NavLink key={item.id} {...item} />
			})}
		</Box>
	)
}
