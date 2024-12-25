import React, { useState, useEffect } from "react";

import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import TypingAnimation from "@/components/TypingAnimation";
import Button from "@/components/Button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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

function Text(props: React.PropsWithChildren<{}>) {
	return (
		<div className="text-black text-lg md:text-xl font-normal font-['Poppins']">
			{props.children}
		</div>
	);
}

export default function HomeFragment() {
	return (
		<div className='w-screen max-h-screen flex-1 md:mx-0 bg-emerald-50'>
			<div className='grid md:h-full'>
				<div className='col-start-1 row-start-1 flex flex-col md:flex-row gap-4 md:pr-4 md:pl-4 z-10 md:mx-0 mx-5'>
					{/* 
						This is the social media links
					*/}
					<div className='flex-none md:w-24 pt-5 md:pt-0'>
						<div className='flex flex-row md:flex-col items-center gap-4'>
							<div className='flex-1'></div>
							<a
								href='https://github.com/adityarao2005'
								target='_blank'
							>
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
							<a
								href='mailto:adityarao2005@gmail.com'
								target='_blank'
							>
								<Icon icon={faEnvelope} />
							</a>

							<div className='flex-1'></div>
						</div>
					</div>
					<div className='flex-auto flex flex-col md:flex-row'>
						<div className='flex-1 flex flex-col-reverse'>
							<div className='hidden md:block md:p-10'></div>
							<div>
								<a href='#experience'>
									<div className='bg-gray-900 font-semibold md:m-5 py-6 align-middle sm-exclusive:w-full rounded-lg text-center text-white px-4 pr-4 hover:bg-slate-700 active:bg-slate-900'>
										View Projects
									</div>
								</a>
							</div>
							<div>
								<Text>
									I&apos;m a cool engineer in McMaster
									University currently pursuing my
									Bachelor&apos;s Degree in Software
									Engineering. Click the button aside to view
									the projects I have completed so far.
								</Text>
							</div>
							<div className='mb-2 sm-exclusive:mx-4'>
								<h1
									className={
										"text-black font-bold text-3xl md:text-6xl font-['Poppins']"
									}
								>
									<TypingAnimation
										data={[
											"Software Engineer",
											"Fullstack Web Developer",
											"Application Developer",
											"Math & CS Tutor",
											"Database Architect",
											"Math and CS enthusiast",
										]}
										cursorStyles='text-red-700'
									/>
								</h1>
							</div>
							<div className='flex-1'></div>
						</div>
/*
						<div className='md:max-h-screen md:flex-1 md:flex hidden'>
							<div className='flex-1'></div>
							<img
								src='/profile-image.jpg'
								alt='logo'
								className='my-2 opacity-60 blur-[2xp] rounded-xl'
							/>
							<div className='flex-1'></div>
						</div>
						*/
						{/*
								This is the column for art stuff
							*/}
						<div className='flex-1 flex flex-col md:mx-4 pt-4'>
							<div className='flex-none'>
								<h1
									className={
										"text-black text-3xl md:text-6xl font-semibold font-['Poppins']"
									}
								>
									Artist
								</h1>
								<Text>
									I have been an artist for most of my
									elementary and highschool career and have
									made many sketches over the years. Click the
									button below to view my art portfolio.
								</Text>

								<a href='#artwork' className='flex'>
									<Button>View Art Portfolio</Button>
								</a>
							</div>
							<div className='md:flex-1'></div>
							<div className='md:pb-20 my-5 flex md:flex-row'>
								{/* TODO: Add resume here */}
								<a
									className='bg-gray-900 rounded-lg text-center text-white md:text-3xl flex-1 py-2 md:py-5 hover:bg-slate-700 active:bg-slate-900'
									href='https://adityarao-portfolio.vercel.app/Aditya_s_Resume.pdf'
									target='_blank'
								>
									Download Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
