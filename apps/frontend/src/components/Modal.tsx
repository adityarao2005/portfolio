import { useEffect } from "react";

// modal view
export default function Modal(
	props: React.PropsWithChildren<{
		visible: boolean;
		backgroundColor?: string;
		backgroundImage?: string | null;
		toggleVisibility: () => void;
	}>
) {
	useEffect(() => {
		if (props.visible == true) document.body.style.overflowY = "hidden";
		else document.body.style.overflowY = "unset";
		return () => {
			document.body.style.overflowY = "unset";
		};
	}, [props.visible]);

	return (
		<div
			className={
				"fixed inset-0 w-full h-full bg-gray-700/50 z-20 backdrop-blur-sm shadow-2xl drop-shadow-xl" +
				(!props.visible && " hidden")
			}
		>
			<div className='flex flex-row'>
				{/*TODO: Consider shrinking the basises to 1/6, 2/3, 1/6 respectively for a smaller screen size */}
				<div className='hidden md:block md:basis-1/6' />
				<div className='flex-1 md:basis-2/3 flex flex-col'>
					<div className='flex-1 flex flex-col h-screen max-h-screen mt-5 mb-10 rounded-t-2xl'>
						{/* Header */}
						{(props.backgroundColor || props.backgroundImage) && (
							<div
								className='h-40 rounded-t-2xl bg-cover bg-no-repeat bg-center'
								style={{
									backgroundImage: `url('${props.backgroundImage}')`,
									backgroundColor: props.backgroundColor,
								}}
							></div>
						)}
						<div className='flex-1 p-5 overflow-y-scroll bg-gray-100'>
							{props.children}
						</div>
						{/* Footer */}
						<div className='p-5 flex flex-row-reverse bg-white'>
							<button
								onClick={props.toggleVisibility}
								className='bg-blue-600 text-white font-bold mb-2 py-2 px-4 rounded-xl '
							>
								Close
							</button>
						</div>
					</div>
				</div>
				<div className='hidden md:block md:basis-1/6' />
			</div>
		</div>
	);
}
