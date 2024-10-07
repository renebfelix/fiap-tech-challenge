import { Layout } from "@/components/Layout/Layout";
import { ReactNode } from "react";

export default function LayoutAuth(params: Readonly<{children: ReactNode}>){
	return <Layout>{params.children}</Layout>
}
