import mviepic from "./assets/mviepic.png";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "./lib/types";
import Card from "./components/ui/Card";
import { Github, ExternalLink } from "lucide-react";
import ecom from "./assets/ecom.png";
import todoapp from "./assets/todoapp.png";
import music from "./assets/music.png";
import game from "./assets/game.png";
import weather from "./assets/weather.png";

const projectsData: Project[] = [
	{
		id: "1",
		title: "E-Commerce Platform",
		description:
			"A full-stack e-commerce platform built with React.js, TypeScript, shadCN UI components and Vite integration.",
		image: `${ecom}`,
		techStack: [
			"React.js",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"Pagination",
			"ShadCN UI",
		],
		githubUrl: "https://github.com/Indrasena-913/E-CommerceWebsite",
		liveUrl: "https://housifyindra.netlify.app/",
	},
	{
		id: "2",
		title: "Movie Search App",
		description:
			"Developed a dynamic movie search application using React, TypeScript, and Tailwind CSS. Integrated the OMDB API for real-time movie details with features like instant search, pagination, and infinite scroll.",
		image: `${mviepic}`,
		techStack: [
			"React.js",
			"TypeScript",
			"Tailwind CSS",
			"ShadCN UI",
			"OMDB API",
		],
		githubUrl: "https://github.com/Indrasena-913/MovieSearchApp",
		liveUrl: "https://indramoviesearch.netlify.app/",
	},
	{
		id: "3",
		title: "To-Do App",
		description:
			"Created a responsive To-Do App using HTML, CSS, and JavaScript with Local Storage integration. Enabled task addition, editing, deletion, and persistent data storage for seamless user experience.",
		image: `${todoapp}`,
		techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
		githubUrl: "https://github.com/Indrasena-913/TodoApp",
		liveUrl: "https://indratodoapp.netlify.app/",
	},
	{
		id: "4",
		title: "Music Player",
		description:
			"A fully functional music player built with React, TypeScript, Vite, Tailwind CSS, and ShadCN UI components. The app allows users to play, pause, skip, and shuffle music tracks, as well as adjust the volume and progress. Integrated with a custom audio player UI for smooth interaction and performance across all devices. Optimized for speed and responsiveness with a modern, intuitive design.",
		image: `${music}`,
		techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "ShadCN UI"],
		githubUrl: "https://github.com/Indrasena-913/MusicPlayer",
		liveUrl: "https://indramusic.netlify.app/",
	},
	{
		id: "5",
		title: "2048 Game",
		description:
			"A browser-based 2048 game developed using HTML, CSS, and JavaScript with local storage to save progress. Features responsive grid layout, tile merging, score tracking, and a restart option",
		image: `${game}`,
		techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
		githubUrl: "https://github.com/Indrasena-913/2048-Game",
		liveUrl: "https://indra2048game.netlify.app/",
	},
	{
		id: "6",
		title: "Weather App",
		description:
			"A weather app built using HTML, CSS, JavaScript, Vite, WeatherAPI, and Geolocation. Provides real-time weather information based on the user's location, displaying current conditions, temperature, and forecasts with a responsive UI.",
		image: `${weather}`,
		techStack: [
			"HTML",
			"CSS",
			"JavaScript",
			"Vite",
			"WeatherAPI",
			"Geolocation",
		],
		githubUrl: "https://github.com/Indrasena-913/weather-app/",
		liveUrl: "https://indrawa.netlify.app/",
	},
];

const Projects: React.FC = () => {
	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-gray-600 dark:text-gray-300">
						Here are some of my recent works and personal projects
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{projectsData.map((project, index) => (
						<Card key={project.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative p-3 "
							>
								<div className="aspect-w-16 aspect-h-9 mb-4">
									<img
										src={project.image}
										alt={project.title}
										className="object-cover rounded-t-xl"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										{`${project.description.slice(0, 100)}... `}
										{project.description.length > 100 && (
											<span className="relative group">
												<button className="text-blue-600 dark:text-blue-300 underline group">
													Read more
												</button>
												<div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg p-4 z-50 hidden group-hover:block">
													<p>{project.description}</p>
												</div>
											</span>
										)}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.techStack.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
										>
											<Github className="w-5 h-5" />
											Code
										</a>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
										>
											<ExternalLink className="w-5 h-5" />
											Live Demo
										</a>
									</div>
								</div>
							</motion.div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
