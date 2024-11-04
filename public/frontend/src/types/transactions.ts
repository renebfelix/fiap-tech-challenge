import { UUID } from "crypto";

export interface TransactionsProps {
	id: UUID;
	value: number;
	name: string;
	date: Date;
	type: "ENTRADA" | "SAIDA";
}
