"use client";
import { TransactionsProps } from "@/types/transactions";
import { useDisclosure } from "@chakra-ui/react";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";

export interface ControlDisclosureProps {
	isOpen: boolean,
	onClose: () => void,
	onOpen: () => void,
}
export interface ModalComponentProps {
	title: string;
	bodyComponent: React.ReactNode;
}

export const MODAL_INITIAL_STATE: ModalComponentProps = {
	title: "",
	bodyComponent: "",
}
interface MainContextProps {
	showValues: boolean,
	setShowValues: Dispatch<SetStateAction<boolean>>,
	controlModal: ControlDisclosureProps;
	modalComponent: ModalComponentProps;
	setModalComponent: Dispatch<SetStateAction<ModalComponentProps>>;
	transactions: Array<TransactionsProps>;
	setTransactions: Dispatch<SetStateAction<Array<TransactionsProps>>>;
	balance: number;
	setBalance: Dispatch<SetStateAction<number>>;
	menuMobile: boolean;
	setMenuMobile: Dispatch<SetStateAction<boolean>>;
}

const MainContext = createContext<MainContextProps>({
	showValues: false,
	setShowValues: () => false,
	controlModal: {
		isOpen: false,
		onClose: () => {},
		onOpen: () => {},
	},
	modalComponent: MODAL_INITIAL_STATE,
	setModalComponent: () => {},
	transactions: [],
	setTransactions: () => [],
	balance: 0,
	setBalance: () => 0,
	menuMobile: false,
	setMenuMobile: () => false,
})


export function MainContextProvider({children}: Readonly<{children: ReactNode}>){
	const [showValues, setShowValues] = useState(false);
	const [menuMobile, setMenuMobile] = useState(false);
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);
	const [modalComponent, setModalComponent] = useState<ModalComponentProps>(MODAL_INITIAL_STATE);
	const controlModal = useDisclosure();

	const memo = useMemo(() => ({
		showValues, setShowValues,
		modalComponent, setModalComponent,
		transactions, setTransactions,
		balance, setBalance,
		menuMobile, setMenuMobile,
		controlModal,
	}), [
		showValues, modalComponent, controlModal, transactions, balance, menuMobile
	]);

	return <MainContext.Provider value={memo}>{children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext);
