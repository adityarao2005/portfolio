import React from "react";

export default function Button(
	props: React.PropsWithChildren<{ onClick?: () => void }>
) {
	return (
		<button
			className='bg-gray-900 flex-1 rounded-lg text-center text-white pt-2 pb-2 pl-4 pr-4 hover:bg-slate-700 active:bg-slate-900'
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
