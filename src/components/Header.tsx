import React from "react";

function Header(props: { type?: string; children: string }) {
	let type = props.type || "4";
	return (
		<div>
			<h1
				className={
					"text-black text-" +
					type +
					" font-semibold font-['Poppins']"
				}
			>
				{props.children}
			</h1>
		</div>
	);
}

export default Header;
