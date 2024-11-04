"use client";

import { Flex, Box, Text, IconButton, Button } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { SidenavLinksProps } from "@/types/sidenav";
import { NavLink } from "../NavLink/NavLink";

export const Header = (params: { links: Array<SidenavLinksProps>}) => {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

	return (
		<Flex
			h="96px"
			w="100%"
			backgroundColor="primary"
			justifyContent="center"
			alignItems="center"
			position="relative"
		>
			<Flex
				maxWidth="1024px"
				width="100%"
				alignItems="center"
				justifyContent={{ base: "space-between", md: "end" }}
				paddingX={3}
			>
				<Button
					variant="unstyled"
					display={{ md: "none" }}
					color="secondary"
					onClick={() => setMobileNavIsOpen(true)}
				>
					<IoIosMenu fontSize={"32px"} />
				</Button>

				<Flex gap={2} alignItems="center">
					<Text
						display={{ base: "none", md: "flex" }}
						variant="small"
						color="white"
						fontWeight="600"
					>
						Joana da Silva Oliveira
					</Text>

					<IconButton
						isRound={true}
						variant="outline"
						aria-label="User"
						colorScheme="secondary"
						fontSize="32px"
						color="secondary"
						icon={<CiUser />}
					></IconButton>
				</Flex>
			</Flex>

			{mobileNavIsOpen && (
				<Box
					position="absolute"
					backgroundColor="lightGreen"
					width="100%"
					top="0"
					padding={3}
					zIndex={100}
					borderBottom={"5px solid"}
					borderColor={"secondary"}
				>
					<Flex justifyContent="space-between">
						<Box>
							{params.links.map((item) => {
								return <NavLink key={item.href} {...item} setMobileNavIsOpen={setMobileNavIsOpen} />
							})}
						</Box>

						<Button
							variant="unstyled"
							color="success"
							onClick={() => setMobileNavIsOpen(false)}
						>
							<MdClose fontSize={"32px"} />
						</Button>
					</Flex>
				</Box>
			)}
		</Flex>
	);
};
