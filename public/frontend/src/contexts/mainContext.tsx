"use client";
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
})


export function MainContextProvider({children}: Readonly<{children: ReactNode}>){
	const [showValues, setShowValues] = useState(false);
	const [modalComponent, setModalComponent] = useState<ModalComponentProps>(MODAL_INITIAL_STATE);
	const controlModal = useDisclosure();

	const memo = useMemo(() => ({
		showValues, setShowValues,
		modalComponent, setModalComponent,
		controlModal,
	}), [
		showValues, modalComponent, controlModal
	]);

	return <MainContext.Provider value={memo}>{children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext);
