import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: "Fiap tech challenge",
	description: "",
};

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" className={inter.className}>
			<body className="">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
