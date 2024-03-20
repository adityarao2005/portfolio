import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavComponent from "@/components/NavComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aditya Rao's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
				/>
				<link
					href='https://fonts.googleapis.com/css?family=Poppins'
					rel='stylesheet'
				/>
			</head>
			<body
				className={inter.className + " overflow-x-hidden"}
			>
				<div className='w-full asdf h-full flex flex-col' id='root'>
					<NavComponent
						links={[
							{ text: "Home", href: "#root" },
							{ text: "About", href: "#about" },
							{ text: "Experience", href: "#experience" },
							{ text: "Artwork", href: "#artwork" },
							{ text: "Contact", href: "#contact-me" },
						]}
						brandText={<b>Aditya Rao</b>}
					/>

					{children}
				</div>
			</body>
		</html>
	);
}
