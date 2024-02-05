"use client";
import React, { ReactElement, useEffect, useState } from "react";

function Link(props: {
	active: boolean;
	setActive: () => void;
	href: string;
	text: string;
}) {
	return (
		<li>
			<a
				href={props.href}
				className={[
					"block py-2 px-3 rounded md:hover:text-blue-500 md:p-0 link hover:bg-gray-700 hover:text-white md:hover:bg-transparent",
					props.active ? "text-white" : "text-gray-400",
				].join(" ")}
				onClick={props.setActive}
			>
				{props.text}
			</a>
		</li>
	);
}

function HamburgerMenu(props: { className: string; onClick: () => void }) {
	return (
		<button
			type='button'
			className={props.className}
			onClick={props.onClick}
		>
			<span className='sr-only'>Open main menu</span>
			<svg
				className='w-5 h-5'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 17 14'
			>
				<path stroke='currentColor' d='M1 1h15M1 7h15M1 13h15' />
			</svg>
		</button>
	);
}

const NavComponent = (props: {
	links: { text: string; href: string }[];
	brandText: ReactElement;
	brandIcon?: string;
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const sections: NodeListOf<HTMLAnchorElement> =
			document.querySelectorAll(".link");

		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			for (let i = sections.length - 1; i >= 0; i--) {
				let section: HTMLDivElement = document.querySelector(
					"#" + sections[i].href.split("#")[1]
				)!;
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;

				if (
					scrollPosition >= sectionTop - 100 &&
					scrollPosition < sectionTop + sectionHeight - 100
				) {
					setActiveIndex(i);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className='flex-none border-gray-200 bg-gray-900 sticky top-0 z-20'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a
					href='/'
					className='flex items-center space-x-3 rtl:space-x-reverse'
				>
					{props.brandIcon && (
						<img
							src={props.brandIcon}
							className='h-8'
							alt='Brand Logo'
						/>
					)}
					<span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
						{props.brandText}
					</span>
				</a>
				<HamburgerMenu
					className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					onClick={toggleMenu}
				/>
				<div
					className={
						"w-full md:block md:w-auto " +
						(isMenuOpen ? "block" : "hidden")
					}
				>
					<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700'>
						{props.links.map((link, index) => (
							<Link
								active={activeIndex == index}
								setActive={() => setActiveIndex(index)}
								href={link.href}
								key={index}
								text={link.text}
							/>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavComponent;
