import { Layout } from "@/components/Layout/Layout";
import { MainContextProvider } from "@/contexts/mainContext";
import { ReactNode } from "react";

export default function LayoutAuth(params: Readonly<{children: ReactNode}>){
	return <MainContextProvider><Layout>{params.children}</Layout></MainContextProvider>
}
