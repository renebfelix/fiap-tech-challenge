import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<h1>Página inicial</h1>
			<Link href={"/home"}>
				<Button>Ir para área logada</Button>
			</Link>
		</>
	);
}
