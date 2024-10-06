"use client";

import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export const Header = () => {
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
				maxWidth="1000px"
				width="1000px"
				alignItems="center"
				justifyContent={{ base: "space-between", md: "end" }}
				paddingX={3}
			>
				<Box
					display={{ md: "none" }}
					color="secondary"
					onClick={() => setMobileNavIsOpen(true)}
				>
					<IoIosMenu fontSize={"32px"} />
				</Box>

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
				>
					<Flex
						color="success"
						onClick={() => setMobileNavIsOpen(false)}
						justifyContent="end"
					>
						<MdClose fontSize={"32px"} />
					</Flex>
				</Box>
			)}
		</Flex>
	);
};
