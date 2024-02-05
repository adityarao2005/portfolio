import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faTrophy } from "@fortawesome/free-solid-svg-icons";

// Use this hook to determine if an element is visible on the screen
function useIsVisible(ref: React.MutableRefObject<HTMLDivElement | null>) {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState<boolean>(false);

	// Set up the observer with the reference element and a callback
	useEffect(() => {
		// Create the observer
		const observer = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting);
		});

		// Observe the element
		if (ref.current)
			observer.observe(ref.current);
		// Disconnect the observer as soon as the element is unmounted
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	// Return whether the element is visible or not
	return isIntersecting;
}

// Use this component to wrap elements that you want to fade in
function ObservableElement({ children }: React.PropsWithChildren<{}>) {
	// Wrap the element in a div that will be used as the ref
	const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	const isVisible = useIsVisible(ref);

	// Return the content wrapped in the ref div
	// Make sure that the visibiliy transition is applied
	return (
		<div
			ref={ref}
			className={`transition-opacity ease-in duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}

function Skill({
	text,
	color = "bg-gray-500",
}: {
	text: string;
	color?: string;
}) {
	return (
		<div
			className={
				color +
				" rounded-full px-2 py-1 my-2 mr-1 font-semibold text-white w-fit inline-block"
			}
		>
			{text}
		</div>
	);
}

function SkillBox({ header, list }: { header: string; list: string[] }) {
	return (
		<div className='bg-cyan-400 h-fit rounded-3xl p-3 mb-4'>
			<div className='font-semibold'>{header}</div>
			<hr></hr>
			{list.map((skill) => (
				<Skill
					color='bg-gray-800'
					key={skill.toString()}
					text={skill}
				></Skill>
			))}
		</div>
	);
}

export default function AboutFragment() {
	return (
		<div id='about' className='w-screen h-fit flex-1'>
			<div className='md:h-full bg-black text-white p-20 grid grid-cols-2'>
				{/* First column */}
				<div className='pr-4'>
					{/* About Me: Name, School, Grade, Interests, Hobbies, etc. */}
					<ObservableElement>
						<h1
							className={
								"text-white text-3xl md:text-6xl font-semibold font-['Poppins']"
							}
						>
							About Me
						</h1>
					</ObservableElement>
					{/* About me Content: Name, School, Grade, Interests, Hobbies, etc. */}
					<div className='pt-5 pb-20 text-left'>
						<ObservableElement>
							<p className='pt-2 pb-6'>
								<span className='fa-stack fa-2x fa-pull-left'>
									<i className='far fa-circle fa-stack-2x'></i>
									<i className='fas fa-user fa-stack-1x'></i>
								</span>{" "}
								My name is Aditya Rao. I&apos;m currently a
								first year B.Eng. student with the intent in
								majoring in Software Engineering. I graduated
								from highschool with Honors at Bur Oak Secondary
								School in Markham, Ontario. I&apos;m interested
								in exploring many aspects and applications of
								software and engineering.
							</p>
						</ObservableElement>
						<ObservableElement>
							<p className='pt-2 pb-6'>
								<span className='fa-stack fa-2x fa-pull-left'>
									<i className='far fa-circle fa-stack-2x'></i>
									<i className='fas fa-school fa-stack-1x'></i>
								</span>{" "}
								I&apos;ve got a great passion for math and the
								sciences and I&apos;m always looking to learn
								more about the world around me. Although my mind
								is mostly on understanding Computer Science,
								Mathematics, Physics and Chemistry have always
								had special place in my heart and mind.
							</p>
						</ObservableElement>
						<ObservableElement>
							<p className='pt-2 pb-6'>
								<span className='fa-stack fa-2x fa-pull-left'>
									<i className='far fa-circle fa-stack-2x'></i>
									<i className='fas fa-info fa-stack-1x'></i>
								</span>{" "}
								I&apos;m also a huge fan of the arts, and I love
								to draw and paint in my free time. I&apos;m also
								a huge fan of music, and I love to play the
								violin (in both Carnatic and Western styles) and
								the flute. I'm also a competitive badminton
								player and I love playing table tennis often.
							</p>
						</ObservableElement>
					</div>

					{/* Experties section: discuss languages and technical skills - header */}
					<ObservableElement>
						<h1
							className={
								"text-white text-3xl md:text-2xl pb-4 font-semibold font-['Poppins']"
							}
						>
							My Expertises
						</h1>
					</ObservableElement>

					{/* Experties section content: discuss languages and technical skills - part 1 */}
					<ObservableElement>
						<p className='pt-2 pb-6'>
							<span className='fa-stack fa-2x fa-pull-left'>
								<i className='far fa-circle fa-stack-2x'></i>
								<i className='fas fa-code fa-stack-1x'></i>
							</span>
							I possess expertise in various programming languages
							and tools, with my primary focus on utilizing a
							fullstack Java approach, employing technologies like
							Spring Backend with Hibernate & Spring Data.
							Additionally, I have extensive experience in
							developing fullstack applications using .NET
							Frameworks like ASP.NET Core, as well as Python with
							Django.
						</p>
					</ObservableElement>
					{/* Experties section content: discuss languages and technical skills - part 2 */}
					<ObservableElement>
						<p className='pt-2 pb-6'>
							<span className='fa-stack fa-2x fa-pull-left'>
								<i className='far fa-circle fa-stack-2x'></i>
								<i className='fas fa-laptop-code fa-stack-1x'></i>
							</span>
							My proficiency extends to native development using
							C/C++, while I leverage JS and TS, along with
							frameworks such as Bootstrap, JQuery, and React, for
							frontend development. I've explored Unity for Game
							development and delved into Machine Learning and AI,
							utilizing both Python and Java. In terms of
							databases, I am well-versed in SQL and NoSQL,
							including MySQL, MongoDB, and PostgreSQL.
						</p>
					</ObservableElement>
					{/* Experties section content: discuss languages and technical skills - part 3 */}
					<ObservableElement>
						<p className='pt-2 pb-6'>
							<span className='fa-stack fa-2x fa-pull-left'>
								<i className='far fa-circle fa-stack-2x'></i>
								<i className='fas fa-tools fa-stack-1x'></i>
							</span>
							Furthermore, my skills encompass UI/UX design and
							prototyping using Figma, and I am adept at version
							control and collaboration through Git and GitHub.
							I'm fluent in working in IDE's such as Visual
							Studio, Eclipse, STS, and VS Code.
						</p>
					</ObservableElement>
					{/* Scrolling mini animation: Java, TailwindCSS, Figma, Python, Javascript, React, ... (many more) */}
					<div className="text-right font-['Poppins'] font-extrabold relative h-[780px]">
						<div className='animate-slideshow_0 absolute right-0'>
							Java
						</div>
						<div className='animate-slideshow_1 absolute right-0'>
							C#
						</div>
						<div className='animate-slideshow_2 absolute right-0'>
							SQL
						</div>
						<div className='animate-slideshow_3 absolute right-0'>
							Figma
						</div>
						<div className='animate-slideshow_4 absolute right-0'>
							Python
						</div>
						<div className='animate-slideshow_5 absolute right-0'>
							JavaScript
						</div>
						<div className='animate-slideshow_6 absolute right-0'>
							React
						</div>
						<div className='animate-slideshow_7 absolute right-0'>
							C/C++
						</div>
					</div>
				</div>
				{/* Second column */}
				<div className='pl-4'>
					{/* Image of me - currently replaced with a placeholder */}
					<ObservableElement>
						<div className='bg-current h-96 rounded-3xl mb-4'></div>
					</ObservableElement>
					{/* Abilities and skills: Fullstack, Machine Learning, Web Design, Game Design, Backend Development, Frontend Development */}
					<ObservableElement>
						<div className="text-right font-['Poppins']  font-extrabold">
							<div className='text-zinc-600 text-8xl'>
								Full Stack
							</div>
							<div className='text-zinc-700 text-7xl'>
								Machine Learning
							</div>
							<div className='text-zinc-800 text-8xl'>Design</div>
						</div>
					</ObservableElement>

					{/* Digital toolbox */}
					<ObservableElement>
						<h1
							className={
								"pt-10 text-white text-3xl md:text-2xl font-semibold font-['Poppins']"
							}
						>
							<FontAwesomeIcon icon={faToolbox} /> Digital Toolbox
						</h1>
					</ObservableElement>

					{/* Digital toolbox description */}
					<ObservableElement>
						<p className='py-2'>
							The following skills describe my digital toolbox and
							tools I use to problem solve in specific places.
						</p>
					</ObservableElement>

					{/* Actual toolbox and skills */}
					<ObservableElement>
						<div className='grid grid-cols-3 gap-8 text-black'>
							<div>
								<SkillBox
									header='Frontend'
									list={[
										"Bootstrap",
										"JQuery",
										"TailwindCSS",
										"React",
										"Next.js",
										"Android",
										"UWP",
										"JavaFX",
									]}
								/>

								<SkillBox
									header='Game Development'
									list={[
										"WPF",
										"UWP",
										"Unity",
										"JavaFX",
										"SFML",
										"OpenGL",
									]}
								/>

								<SkillBox
									header='Office'
									list={[
										"Word",
										"Powerpoint",
										"Excel",
										"Outlook",
										"Sharepoint",
										"Access",
									]}
								/>
							</div>
							<div>
								<SkillBox
									header='Backend'
									list={[
										"Spring Framework",
										"Hibernate/JPA",
										"ASP.NET Core",
										"Django",
										"Node.js",
										"Express.js",
										"Flask",
										"Socket.io",
									]}
								/>
								<SkillBox
									header='Languages'
									list={[
										"Java",
										"C#",
										"C/C++",
										"JS",
										"Python",
									]}
								/>
								<SkillBox
									header='G-Apps'
									list={[
										"Docs",
										"Slides",
										"Spreadsheet",
										"Calendar",
										"Drive",
										"Gmail",
									]}
								/>
							</div>
							<div>
								<SkillBox
									header='Database'
									list={[
										"MySQL",
										"MongoDB",
										"PostegresSQL",
										"MSSQL",
										"SQLite",
									]}
								/>
								<SkillBox
									header='Tools'
									list={[
										"Git",
										"Github",
										"VS Code",
										"Visual Studio",
										"Eclipse",
										"Postman",
										"Maven",
										"PIP",
										"NPM",
										"Gradle",
									]}
								/>
								<SkillBox
									header='Misc'
									list={[
										"Autodesk Inventor",
										"Granta EduPack",
										"Figma",
										"Unity",
										"Paint3D",
									]}
								/>
							</div>
						</div>
					</ObservableElement>

					{/* Mention any awards */}
					<ObservableElement>
						<h1
							className={
								"pt-5 text-white text-3xl md:text-2xl font-semibold font-['Poppins']"
							}
						>
							<FontAwesomeIcon icon={faTrophy} color='yellow' />{" "}
							Awards
						</h1>
					</ObservableElement>

					{/* Digital toolbox description */}
					<ObservableElement>
						<p className='py-2'>
							The following are some of the awards I've received
							over the years.
						</p>
						<div>
							<Skill text='Ontario Scholar' />
							<Skill text='Honors Gr 12' />
							<Skill text='Euclid Competition Distinction' />
							<Skill text='CCC Distinction' />
							<Skill text='CSMC Distinction' />
							<Skill text='Award of Merit: Intro to Computer Science' />
							<Skill text='Honors Gr 11' />
							<Skill text='Honors Gr 10' />
							<Skill text='Honors Gr 9' />
						</div>
					</ObservableElement>
				</div>
			</div>
		</div>
	);
}
