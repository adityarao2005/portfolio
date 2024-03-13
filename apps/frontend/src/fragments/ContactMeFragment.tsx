import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { postMessage } from "@/models/datastore";

function Icon(props: { icon: IconProp }) {
	return (
		<div className='flex-none w-12 h-12 bg-blue-300 rounded-full hover:cursor-pointer align-middle text-center hover:bg-blue-400 active:bg-blue-200'>
			<FontAwesomeIcon
				icon={props.icon}
				className='translate-y-1/4 align-middle text-center'
				size='2x'
			/>
		</div>
	);
}

function MessageModal(props: {
	visible: boolean;
	toggleVisibility: () => void;
	errors: string[];
}) {
	return (
		<Modal
			visible={props.visible}
			toggleVisibility={props.toggleVisibility}
			backgroundColor='skyblue'
		>
			{props.errors.length == 0 ? (
				<div>
					<h1 className='text-4xl font-bold text-black text-center'>
						Message Sent Successfully
					</h1>
					<p className='text-center pt-5'>
						I will get back to you as soon as possible!
					</p>
				</div>
			) : (
				<div className='pt-5 p-10'>
					<h1 className='text-4xl font-bold text-black text-center pb-5'>
						The Following Errors were found while sending the
						message
					</h1>
					<ul className='list-disc font-bold text-red-500'>
						{props.errors.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
					<p className='text-center pt-5'>
						Make sure to fix these errors and try again
					</p>
				</div>
			)}
		</Modal>
	);
}

export default function ContactMeFragment() {
	const [modalVisible, setModalVisible] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const action = () => {
		// First validate form
		let _errors: string[] = [];
		if (name == "") _errors.push("Name cannot be empty");
		if (email == "") _errors.push("Email cannot be empty");
		if (!/\S+@\S+\.\S+/.test(email)) _errors.push("Invalid email format");
		if (subject == "") _errors.push("Subject cannot be empty");
		if (message == "") _errors.push("Message cannot be empty");
		setErrors(_errors);

		if (_errors.length == 0) {
			// TODO: send message
			postMessage({
				name: name,
				email: email,
				subject: subject,
				message: message,
			})
				.then((res) => alert(res.status))
				.then(() => setModalVisible(true));
		} else {
			setModalVisible(true);
		}
	};

	return (
		<div id='contact-me' className='p-10 bg-emerald-50'>
			<MessageModal
				visible={modalVisible}
				toggleVisibility={() => setModalVisible(!modalVisible)}
				errors={errors}
			/>
			<h1 className='text-4xl font-bold text-center text-black my-10'>
				Contact Me Via Social Media
			</h1>

			<div className='flex flex-row items-center gap-4'>
				<div className='flex-1'></div>
				<a href='https://github.com/adityarao2005' target='_blank'>
					<Icon icon={faGithub} />
				</a>
				<a
					href='https://www.linkedin.com/in/aditya-g-rao'
					target='_blank'
				>
					<Icon icon={faLinkedin} />
				</a>
				<a
					href='https://www.instagram.com/epicbird4410'
					target='_blank'
				>
					<Icon icon={faInstagram} />
				</a>
				<a
					href='https://discordapp.com/users/626566926658699265'
					target='_blank'
				>
					<Icon icon={faDiscord} />
				</a>
				<a href='mailto:adityarao2005@gmail.com' target='_blank'>
					<Icon icon={faEnvelope} />
				</a>
				<div className='flex-1'></div>
			</div>

			<div className='flex flex-col gap-4 mx-20 my-10 ring rounded-xl p-4'>
				<h1 className='text-4xl font-bold text-center text-black'>
					Or Send Me A Message
				</h1>
				<div className='flex flex-row'>
					<div className='flex-1 flex flex-row'>
						<input
							type='text'
							placeholder='Name'
							className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='flex-1 flex flex-row'>
						<input
							type='email'
							placeholder='Email'
							className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>

				<div className='flex-1 flex flex-row'>
					<input
						type='text'
						placeholder='Subject'
						className='p-2 m-2 flex-1 border-2 border-gray-500 rounded-md'
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</div>

				<div className='flex-1 flex flex-row'>
					<textarea
						placeholder='Message'
						className='p-2 mx-2 flex-1 border-2 h-32 border-gray-500 rounded-md'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<button
					className='bg-blue-600 text-white font-bold py-2 px-4 rounded-xl'
					onClick={action}
				>
					<FontAwesomeIcon icon={faPaperPlane} /> Send
				</button>
			</div>
		</div>
	);
}
