import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Project, ProjectDetails } from "@/models/models";

const projects = [
	// Auto Code framework
	new Project(
		// Name
		"AutoCode Framework",
		// Description
		"The AutoCode Framework is a multi-purpose framework which I am currently building as a hobby to showcase and develop my programmatic and systems architecure skills. It will consist of components regarding many levels of programming development from Web to Native Graphics to AI to Cloud to Game Development. It is currently being built, starting with IoC container and a math & stats engine.",
		// Image
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			null,
			// Start date
			"Jan 2023",
			// End date
			"Present",
			// Github
			"https://github.com/adityarao2005/AutoCode",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["Core Java"],
			// Tools
			["Eclipse", "Github"]
		)
	) /*
	// Tutor.io project
	new Project(
		// Name
		"Interview.io (Tutor.io... name not decided yet)",
		// Description
		"This project is aimed to solve the problem of being unprepared for an interview. Many people currently lack the resources to help them prepare for an interview be it technical resources or people to help them practice. Our goal is to create an automated interview bot which has the capability of performing a mock interview for ANY type of interview",
		// Image
		"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer & Project Manager",
			// Start date
			"December 2023",
			// End date
			"Present",
			// Github
			"https://github.com/adityarao2005",
			// Collaborators
			["Kamakshi Sarvanthan", "Zheng Pei", "Happy Zhou", "Jenny Zhong"],
			// Awards
			null,
			// Skills
			["Next.js", "Python", "Fluent2", "Django", "TensorFlow"],
			// Tools
			["VS Code", "Github"]
		)
	),*/,
	// Tutor.io project
	new Project(
		// Name
		"WebCraft",
		// Description
		"This project is aimed at bringing C++ back into prominence by allowing for it to be used in web development. The project is a web framework which allows for C++ to be used in web development. It is currently in the early stages of development and is being built as a hobby to showcase my skills in C++ and web development.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/webcraft.svg",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"December 2024",
			// End date
			"Present",
			// Github
			"https://github.com/adityarao2005/WebForCPP",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["C++", "Networking", "OpenSSL"],
			// Tools
			["VS", "Github"]
		)
	),

	// QuakeGuard
	new Project(
		// Name
		"QuakeGuard",
		// Description
		" QuakeGuard is a project which aims to solve the problem of earthquakes and their effects on buildings. The tool is used to predict earthquakes and their magnitudes based on geolocation services.",
		// Image
		"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/720/310/datas/gallery.jpg",
		// link
		"https://devpost.com/software/quakeguard?ref_content=my-projects-tab&ref_feature=my_projects",
		new ProjectDetails(
			// Event
			"DeltaHacks X",
			// Position
			"Fullstack Developer",
			// Start date
			"Jan 2024",
			// End date
			"Jan 2024",
			// Github
			"https://github.com/adityarao2005/deltahacksX",
			// Collaborators
			["Shaun Plassery", "Tae Yon Ha", "Jamie Steadman"],
			// Awards
			null,
			// Skills
			[
				"Next.js",
				"Pandas",
				"SciKit Learn",
				"TensorFlow",
				"Flask",
				"GCP",
				"Python",
				"TailwindCSS",
			],
			// Tools
			["VS Code", "Github"]
		)
	),

	// QuakeGuard
	new Project(
		// Name
		"FRC 2023: Team 9113 - Bulldog Robotics",
		// Description
		"Being the Software Team lead for our team, I was able to help manuver and guide the team as to the workflow of the robot and how it should behave based on the commands we give it. We were able to win the Rookie All Star Award and the Rookie Inspiration Award.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/robotics-picture.jpg",
		// link
		null,
		new ProjectDetails(
			// Event
			"Bur Oak Secondary School Robotics Team",
			// Position
			"Software Team Lead",
			// Start date
			"Jan 2023",
			// End date
			"May 2023",
			// Github
			"https://github.com/adityarao2005/BOSS-Robotics-2023-Code",
			// Collaborators
			[
				"Kirrithan Sathananthan",
				"Deekshu Kannan",
				"Happy Zhou",
				"Sai Sujay Anamangandla",
				"Kamakshi Sarvanthan",
				"Shamanthi Rajgopal",
				"Christina",
				"Neiv Shah",
				"Sean Chen",
				"Samiksha Shetty",
			],
			// Awards
			["Rookie All Star Award", "Rookie Inspiration Award"],
			// Skills
			["Java", "WPLib", "Command Based Programming", "Embedded Systems"],
			// Tools
			["VS Code", "Github"]
		)
	),
	// Sample project
	new Project(
		// Name
		"Task Management and Scheduling App",
		// Description
		"Created an enterprise-grade calendar for my culminating in Grade 12 Computer Science course at school. Imagine it to be a mirror of Outlook with Google Classroom Integration in Java geared towards Task Management and Task Scheduling. Has features such as adding events, reading events from Google Classroom, creating sub-tasks, creating and managing reminders and alerting systems, and a Pomodoro system to ensure completion of tasks.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/calendar-image.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Bur Oak Secondary School",
			// Position
			"Developer",
			// Start date
			"June 2023",
			// End date
			"June 2023",
			// Github
			"https://github.com/adityarao2005/EnterpriseCalendarApp",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["Java", "JavaFX", "Google Classroom API", "MySQL"],
			// Tools
			["Eclipse", "Github"]
		)
	),

	new Project(
		// Name
		"Big Data Analysis of Education in Ontario",
		// Description
		"Used Ontario's OpenData dataset to provide data visualisation of the education system in Ontario. The project was created using Java to analyse the data and the JFreeChart library to visualise the data. It described the trends in the education system in Ontario and provided a way to compare schools across the province along with the relationship of wages.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/big-data-image.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Bur Oak Secondary School",
			// Position
			"Developer",
			// Start date
			"May 2023",
			// End date
			"May 2023",
			// Github
			"https://github.com/adityarao2005/DemographicDataVisualizer",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["Java", "JFreeChart", "Data Analysis", "Data Visualisation"],
			// Tools
			["Eclipse", "Github"]
		)
	),
	new Project(
		// Name
		"Ticket To Ride Canada",
		// Description
		"Created a digital version of the board game Ticket To Ride with Canada as the map using Java Swing. The game is a simple game where the user has to collect as many points as possible by completing routes. The game also has a simple AI system, which leverages Graph Theory, to make the game more challenging.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/ttr-image.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Bur Oak Secondary School",
			// Position
			"Developer",
			// Start date
			"Apr 2023",
			// End date
			"Apr 2023",
			// Github
			"https://github.com/adityarao2005/TTRCanada",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["Java Swing", "Algorithms", "Graph Theory"],
			// Tools
			["Eclipse", "Github"]
		)
	),

	// Sample project
	new Project(
		// Name
		"Ninjigma: The Picture Puzzle Game",
		// Description
		"Developed a picture puzzle game using C# and UWP. The game is a simple game where the user has to solve a picture puzzle. The game takes a picture, cuts it, scrambles it, and gets the user to try to solve it. Implemented graph theory for solving. It has multiple difficulties from easy to hard and has a timer. Made it for my brother.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/ninjigma-image.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"Apr 2022",
			// End date
			"May 2022",
			// Github
			"https://github.com/adityarao2005/Ninjigma",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["C#", "UWP"],
			// Tools
			["Visual Studio", "Github"]
		)
	),

	// Sample project
	new Project(
		// Name
		"Sample Ecommerce Web Application",
		// Description
		"Created a sample template e-commerce app for any local business to use. Has both a customer side, an employee side, and an admin side. Used Spring and Hibernate, to create the infrastructure of the project. Managed payment system via Stripe and used Gmail API to send autonomous emails. Constructed user authentication and authorization, transaction management, status of each product, and many more features.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/sample-ecommerce-image.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"Dec 2021",
			// End date
			"Mar 2022",
			// Github
			"https://github.com/adityarao2005/SampleEcommerceApp",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["Java", "Spring", "Hibernate", "MySQL", "Bootstrap", "JQuery"],
			// Tools
			["Eclipse", "Github"]
		)
	),

	// Sample project
	new Project(
		// Name
		"SFML Game Engine",
		// Description
		"Created a simple cross-platform game engine using C++ and created a demo game along with it to showcase how to use the engine. Inspired by Unity, I wanted to create something lightweight and fast while encompassing the power that unity has.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/sharpshooter.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"May 2021",
			// End date
			"Aug 2021",
			// Github
			"https://github.com/adityarao2005/GameEngine_AR",
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["C++", "SFML", "Entity Component System", "OpenGL"],
			// Tools
			["Visual Studio", "Github"]
		)
	),

	new Project(
		// Name
		"Endless Runner",
		// Description
		"Developed a 3D side scrolling game using C# and Unity 3D, where the user has to dodge obstacles and collect coins to get the highest score possible. The game has a leaderboard and a login system to keep track of the user's scores.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/endlessrunner.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"May 2021",
			// End date
			"Aug 2021",
			// Github
			null,
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["C# Mono", "Unity 3D"],
			// Tools
			["Visual Studio", "Unity 3D", "Github"]
		)
	),

	// Sample project
	new Project(
		// Name
		"C# SharpShooter Game",
		// Description
		"Developed a sharpshooter game using C# and WinForms. The game is a simple game where the user has to shoot the target as many times as possible in 30 seconds. The game has a leaderboard and a login system to keep track of the user's scores. The game also has a simple AI system to make the game more challenging.",
		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/sharpshooter.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Developer",
			// Start date
			"May 2021",
			// End date
			"Aug 2021",
			// Github
			null,
			// Collaborators
			null,
			// Awards
			null,
			// Skills
			["C#", "WinForms"],
			// Tools
			["Visual Studio", "Github"]
		)
	),

	// Sample project
	new Project(
		// Name
		"ActiveQuest",
		// Description
		`Active Quest is a cutting-edge fitness app developed by the brilliant minds at Bur Oak Secondary School. It not only encompasses all the essential functions of a traditional fitness app but also introduces exciting additional features. With Active Quest, the developers prioritized "fun" and "simple" as their core principles, shaping the entire app around these concepts.`,

		// Image
		"https://adityarao-portfolio.vercel.app/images/misc/activequest.png",
		// link
		null,
		new ProjectDetails(
			// Event
			"Side project",
			// Position
			"Project Manager, Senior Developer",
			// Start date
			"May 2023",
			// End date
			"Archived",
			// Github
			"https://github.com/Innovoak/ActiveQuest",
			// Collaborators
			[
				"Happy Zhou",
				"Kamakshi Sarvanthan",
				"Deekshu Kannan",
				"Jeffrey Wong",
				"Jeffrey Huang",
				"Anshul Shah",
				"Rupert Maiti",
				"Shamanthi Rajgopal",
				"Oliver Lai Wai",
			],
			// Awards
			null,
			// Skills
			["Android", "Java", "Servlets", "MySQL", "REST API"],
			// Tools
			["Eclipse", "Android Studio", "Figma", "Github"]
		)
	),
];
function ProjectViewModel(props: {
	visible: boolean;
	toggleVisibility: () => void;
	project: Project | null;
}) {
	return (
		<Modal
			visible={props.visible}
			toggleVisibility={props.toggleVisibility}
			backgroundImage={props.project && props.project.image}
		>
			{props.project && (
				<div>
					<h1 className='text-3xl font-bold'>{props.project.name}</h1>
					<p className='text-lg'>{props.project.description}</p>
					<div className='mt-5 flex flex-row'>
						<div className='flex-1'>
							<h1 className='text-2xl font-bold'>Details</h1>
							{props.project.details.event && (
								<p className='text-lg'>
									<b>Associated With</b>:{" "}
									{props.project.details.event}
								</p>
							)}
							{props.project.details.position && (
								<p className='text-lg'>
									<b>Position</b>:{" "}
									{props.project.details.position}
								</p>
							)}
							<p className='text-lg'>
								<b>Start Date</b>:{" "}
								{props.project.details.startDate}
							</p>
							<p className='text-lg'>
								<b>End Date</b>: {props.project.details.endDate}
							</p>

							{props.project.details.github && (
								<p className='text-lg'>
									<b>Github Repo</b>:{" "}
									<a
										href={props.project.details.github}
										target='_blank'
										className='hover:underline text-blue-500'
									>
										Click Me to View
									</a>
								</p>
							)}

							{props.project.details.collaborators && (
								<p className='text-lg'>
									<b>Key Collaborators</b>:{" "}
									{props.project.details.collaborators.join(
										", "
									)}
								</p>
							)}

							{props.project.details.awards && (
								<p className='text-lg'>
									<b>Awards</b>:{" "}
									{props.project.details.awards.join(", ")}
								</p>
							)}

							<p className='text-lg'>
								<b>Skills</b>:{" "}
								{props.project.details.skills.join(", ")}
							</p>

							{props.project.details.tools && (
								<p className='text-lg'>
									<b>Tools</b>:{" "}
									{props.project.details.tools.join(", ")}
								</p>
							)}
						</div>
						{props.project.link && (
							<div className='flex-1 flex flex-col'>
								<h1 className='text-2xl font-bold'>
									View Demo
								</h1>
								<br />
								<a
									href={props.project.link}
									target='_blank'
									className='flex-1'
								>
									<div className='h-full relative border border-black hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200'>
										<div className='flex absolute inset-0 z-30'>
											<div className='flex-1'></div>
											<div className='flex flex-col'>
												<div className='flex-1'></div>
												<FontAwesomeIcon
													icon={faUpRightFromSquare}
													size='6x'
													className='backdrop-blur-[1px]'
													stroke='white'
													strokeWidth={4}
												/>
												<div className='flex-1'></div>
											</div>
											<div className='flex-1'></div>
										</div>

										<div className='absolute inset-0 inline-block z-20'></div>

										<object
											data={props.project.link}
											type='text/html'
											className='w-full h-full absolute inset-0 z-10 blur-[1px]'
										>
											<img
												src={props.project.image}
												className='object-contain w-full h-full'
											/>
										</object>
									</div>
								</a>
							</div>
						)}
					</div>
				</div>
			)}
		</Modal>
	);
}
/** TODO: Change the images */

// cards
function ProjectCard(props: {
	project: Project;
	onClick: () => void;
	visible: boolean;
}) {
	return (
		<div
			className={
				"h-96 flex flex-col rounded-md bg-cover bg-center bg-no-repeat p-5 text-white hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 duration-200 drop-shadow-xl border border-gray-400 " +
				(props.visible ? "" : "hidden")
			}
			style={{
				backgroundImage: `url(${props.project.image})`,
			}}
			onClick={props.onClick}
		>
			<h1 className='text-3xl font-bold bg-black'>
				{props.project.name}
			</h1>
			<p className='text-lg bg-black w-fit'>View Description</p>
			<div className='flex-1'></div>
			<div>
				{props.project.details.endDate == "Present" ||
				props.project.details.endDate == "Archived" ? (
					<div className='rounded-full bg-red-500 p-1 w-fit'>
						{props.project.details.endDate == "Present"
							? "In Progress"
							: "Archived"}
					</div>
				) : (
					<div className='rounded-full bg-green-600 p-1 w-fit'>
						Completed
					</div>
				)}

				{props.project.details.skills.map((skill, index) => (
					<div
						key={index}
						className='bg-gray-500 rounded-full px-2 py-1 my-2 mr-1 font-semibold text-white w-fit inline-block'
					>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
}

export default function ProjectFragment() {
	// Main fragment for the projects page
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);
	const [shownProjects, setShownProjects] = useState(4);

	const toggleVisibility = (project?: Project) => {
		setModalVisible(!modalVisible);
		if (project) setSelectedProject(project);
	};

	return (
		<div
			id='experience'
			className='w-screen h-fit flex-1 bg-emerald-50 p-10 relative'
		>
			<ProjectViewModel
				visible={modalVisible}
				toggleVisibility={() => toggleVisibility()}
				project={selectedProject}
			/>
			<div className='my-10'>
				<h1
					className={
						"text-center mx-auto text-black text-3xl md:text-6xl font-semibold font-['Poppins']"
					}
				>
					Experience
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						onClick={() => toggleVisibility(project)}
						visible={index < shownProjects}
					/>
				))}
			</div>
			{shownProjects < projects.length && (
				<div className='p-5 flex flex-row'>
					<div className='flex-1 h-[1px] my-auto bg-black' />
					<button
						className='px-2'
						onClick={() => setShownProjects(shownProjects + 4)}
					>
						<div className='inline-block -rotate-90'>&lt;</div> Load
						More
					</button>
					<div className='flex-1 h-[1px] my-auto bg-black' />
				</div>
			)}
		</div>
	);
}
