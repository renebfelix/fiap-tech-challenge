import { Flex, Text } from "@chakra-ui/react";
import { FieldValues } from "react-hook-form";
import { FiXCircle } from "react-icons/fi";

export function ErrorTextForm(params: FieldValues){
	return (
		<Flex color={"danger"} alignItems={"center"} gap={1} mt={1}>
			<FiXCircle fontSize={14} />
			<Text fontSize={14} color={"danger"}>{params.message}</Text>
		</Flex>
	)
}
