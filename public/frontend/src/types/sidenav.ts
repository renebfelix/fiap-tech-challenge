import { ReactNode } from "react";

export interface SidenavLinksProps {
	id: number;
	title: string;
	href: string;
	icon?: ReactNode;
	setMobileNavIsOpen: (isOpen: boolean) => void;
}
