"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";

interface MainContextProps {
	showValues: boolean,
	setShowValues: Dispatch<SetStateAction<boolean>>,
}

const MainContext = createContext<MainContextProps>({
	showValues: false,
	setShowValues: () => false,
})


export function MainContextProvider({children}: Readonly<{children: ReactNode}>){
	const [showValues, setShowValues] = useState(false);

	const memo = useMemo(() => ({
		showValues, setShowValues
	}), [
		showValues
	]);

	return <MainContext.Provider value={memo}>{children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext);
