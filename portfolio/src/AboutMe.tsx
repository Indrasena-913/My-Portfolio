import React, { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import {
	CodeIcon,
	AwardIcon,
	BriefcaseIcon,
	DownloadIcon,
	MailIcon,
	LinkedinIcon,
	PhoneIcon,
} from "lucide-react";
import my from "./assets/my.png";

// Type definitions
type TabContentItem = {
	p: string;
	span: string;
	color: string;
	details?: string[];
};

type TabContent = {
	title: string;
	icon: React.ComponentType;
	content: TabContentItem[];
};

const AboutSection: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabContents: TabContent[] = [
		{
			title: "Skills",
			icon: CodeIcon,
			content: [
				{
					p: "Frontend Technologies",
					span: "HTML, CSS, JavaScript, ReactJs, TypeScript, Tailwind CSS, Redux, Vite",
					color: "text-blue-600",
				},
				{
					p: "Backend & Database",
					span: "Python, Node.js, SQL",
					color: "text-green-600",
				},
				{
					p: "Other Technical Skills",
					span: "Data Structures & Algorithms, Windows, Linux, Netlify",
					color: "text-purple-600",
				},
			],
		},
		{
			title: "Achievements",
			icon: AwardIcon,
			content: [
				{
					p: "NPTEL Certification",
					span: "Certified in IoT & Cloud Computing",
					color: "text-yellow-600",
				},
				{
					p: "Problem Solving",
					span: "250+ problems solved on LeetCode, GeeksforGeeks, HackerRank",
					color: "text-red-600",
				},
				{
					p: "Leadership",
					span: "Team Leader at DevSnest, mentored 20 members",
					color: "text-indigo-600",
				},
			],
		},
		{
			title: "Experience",
			icon: BriefcaseIcon,
			content: [
				{
					p: "Intern-Trainee",
					span: "DEVSNEST (Feb 2024 - Nov 2024) | Virtual Internship",
					color: "text-teal-600",
					details: [
						"Developed major projects like E-Commerce Website, Spotify Clone, Movie Search App, Task Manager",
						"Completed over 12+ projects within a span of 3 months, showcasing efficiency and adaptability",
						"Team Leader mentoring 20 members in Javascript, ReactJs, Data Structures & Algorithms, and Python",
						"Supervised and supported other Team Leaders, ensuring smooth execution of the Bootcamp",
					],
				},
			],
		},
	];

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 "
			id="aboutme"
		>
			<div className="relative w-full max-w-md mx-auto group">
				<div className="absolute inset-0 bg-blue-200 dark:bg-gray-700 rounded-xl -rotate-6 transform"></div>
				<div className="relative z-10 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
					<div className="overflow-hidden rounded-lg">
						<img
							src={my}
							alt="S Indrasenagowdu"
							className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>
			</div>

			<div className="w-full lg:w-1/2 space-y-6">
				<motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
					About Me
				</motion.h2>

				<motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed">
					Recent computer science graduate with solid skills in coding and
					problem-solving. Looking for a software engineering role that values
					innovation and teamwork. Excited to contribute to interesting projects
					and grow professionally.
				</motion.p>

				<div className="flex space-x-2 mb-6 bg-gray-100 dark:bg-gray-800 rounded-full p-2 align-center flex-wrap justify-center">
					{tabContents.map((tab, index) => (
						<button
							key={index}
							onClick={() => setActiveTab(index)}
							className={`
                                flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                                ${
																	activeTab === index
																		? "bg-blue-600 text-white"
																		: "text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
																}
                            `}
						>
							<div className="w-5 h-5">
								<tab.icon />
							</div>{" "}
							{tab.title}{" "}
						</button>
					))}
				</div>

				<div className="space-y-4">
					{tabContents[activeTab].content.map((item, index) => (
						<motion.div
							key={index}
							className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
						>
							<p className={`font-semibold text-lg ${item.color}`}>{item.p}</p>
							<span className="text-gray-500 dark:text-gray-400 block mb-2">
								{item.span}
							</span>
							{item.details && (
								<ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
									{item.details.map((detail, detailIndex) => (
										<li key={detailIndex} className="mb-1">
											{detail}
										</li>
									))}
								</ul>
							)}
						</motion.div>
					))}
				</div>

				<motion.div className="flex items-center gap-8">
					<a
						href="https://drive.google.com/uc?id=103dgd0bn8PUKI9L0q0q66oNToHAnrKRK&export=download"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 
        bg-blue-600 text-white rounded-full 
        hover:bg-blue-700 transition-colors 
        shadow-md hover:shadow-lg"
					>
						<DownloadIcon className="w-5 h-5" />
						Download CV
					</a>

					<div className="flex items-center space-x-4">
						<a
							href="mailto:indrasena14318@gmail.com"
							className="text-blue-600 hover:text-blue-800 flex items-center"
						>
							<MailIcon className="w-5 h-5 mr-1" />
						</a>
						<a
							href="https://www.linkedin.com/in/s-indrasena-609452285"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 flex items-center"
						>
							<LinkedinIcon className="w-5 h-5 mr-1" />
						</a>
						<a
							href="tel:+916303002316"
							className="text-blue-600 hover:text-blue-800 flex items-center"
						>
							<PhoneIcon className="w-5 h-5 mr-1" />
						</a>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default AboutSection;
