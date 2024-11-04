import { TransactionsProps } from "@/types/transactions";

export function updateBalance(transactions: Array<TransactionsProps>){
	let balance = 0;

	transactions.forEach((transaction) => {
		if (transaction.type === "ENTRADA"){
			balance = balance + Number(transaction.value);
		} else {
			balance = balance - Number(transaction.value);
		}
	});

	return balance;
}
