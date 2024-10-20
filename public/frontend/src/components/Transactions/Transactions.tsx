"use client";

import { useMainContext } from "@/contexts/mainContext";
import { TransactionsProps } from "@/types/transactions";
import { moneyCurrency } from "@/utils/moneyCurrency";
import { Box, Flex, Text } from "@chakra-ui/react";
import moment from "moment";

export function Transactions(params: Readonly<TransactionsProps>){
	const { date, name, type, value } = params;
	const { showValues } = useMainContext();

	return (
		<Box p={"2"} border={"1px solid"} borderColor={"primary"}>
			<Text variant={"small"} as={"h3"}>
				{moment(date).format("DD/M/YYYY")}
			</Text>

			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Text variant={"subtitle"} as={"h3"}>{name}</Text>

				<Text
					variant={"subtitle"}
					color={type === "ENTRADA" ? "success" : "danger"}
					as={"h3"}
				>
					{showValues ? moneyCurrency(value) : "R$ ***"}
				</Text>
			</Flex>
		</Box>
	)
}
