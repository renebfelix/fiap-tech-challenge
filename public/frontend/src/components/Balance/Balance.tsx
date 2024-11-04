"use client";

import { useMainContext } from "@/contexts/mainContext";
import { moneyCurrency } from "@/utils/moneyCurrency";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function Balance({balance}: Readonly<{balance: number}>){
	const { setShowValues, showValues } = useMainContext();

	return (
		<Box bgColor={"primary"} p={3} borderRadius='8px'>
			<Flex justifyContent={"space-between"} alignItems={"center"} mb={1}>
				<Text
					variant={"subtitle"}
					color={"white"}
					borderBottom={"3px solid"}
					borderBottomColor={"secondary"}
					paddingBottom={1}
					paddingEnd={5}
				>
					Saldo conta corrente
				</Text>

				<IconButton
					icon={showValues ? <FaEyeSlash /> : <FaEye />}
					variant={"circleOutlineSecondary"}
					aria-label="Ocultar/Exibir saldo"
					onClick={() => setShowValues(!showValues)}
				/>
			</Flex>

			<Text color={"white"} variant={"title"}>
				{showValues ? moneyCurrency(balance) : "R$ ***"}
			</Text>
		</Box>
	)
}
