// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Skill } from "./lib/types";

// const skillsData: Skill[] = [
// 	{
// 		id: "1",
// 		name: "React",
// 		icon: "/icons/react.svg",
// 		proficiency: 90,
// 		category: "frontend",
// 	},
// 	{
// 		id: "2",
// 		name: "HTML",
// 		icon: "/icons/html.svg",
// 		proficiency: 85,
// 		category: "frontend",
// 	},
// 	{
// 		id: "3",
// 		name: "CSS",
// 		icon: "/icons/css.svg",
// 		proficiency: 85,
// 		category: "frontend",
// 	},
// 	{
// 		id: "4",
// 		name: "JavaScript",
// 		icon: "/icons/javascript.svg",
// 		proficiency: 90,
// 		category: "frontend",
// 	},
// 	{
// 		id: "5",
// 		name: "ReactJs",
// 		icon: "/icons/react.svg",
// 		proficiency: 90,
// 		category: "frontend",
// 	},
// 	{
// 		id: "6",
// 		name: "TypeScript",
// 		icon: "/icons/typescript.svg",
// 		proficiency: 85,
// 		category: "frontend",
// 	},
// 	{
// 		id: "7",
// 		name: "Tailwind CSS",
// 		icon: "/icons/tailwind.svg",
// 		proficiency: 80,
// 		category: "frontend",
// 	},
// 	{
// 		id: "8",
// 		name: "Redux",
// 		icon: "/icons/redux.svg",
// 		proficiency: 80,
// 		category: "frontend",
// 	},
// 	{
// 		id: "9",
// 		name: "Vite",
// 		icon: "/icons/vite.svg",
// 		proficiency: 75,
// 		category: "frontend",
// 	},
// 	{
// 		id: "10",
// 		name: "Python",
// 		icon: "/icons/python.svg",
// 		proficiency: 80,
// 		category: "backend",
// 	},
// 	{
// 		id: "11",
// 		name: "Node.Js",
// 		icon: "/icons/node.svg",
// 		proficiency: 85,
// 		category: "backend",
// 	},
// 	{
// 		id: "12",
// 		name: "SQL",
// 		icon: "/icons/sql.svg",
// 		proficiency: 80,
// 		category: "backend",
// 	},
// 	{
// 		id: "13",
// 		name: "Data Structures & Algorithms",
// 		icon: "/icons/dsa.svg",
// 		proficiency: 40,
// 		category: "other",
// 	},
// 	{
// 		id: "14",
// 		name: "Windows",
// 		icon: "/icons/windows.svg",
// 		proficiency: 85,
// 		category: "other",
// 	},
// 	{
// 		id: "15",
// 		name: "Linux",
// 		icon: "/icons/linux.svg",
// 		proficiency: 80,
// 		category: "other",
// 	},
// 	{
// 		id: "16",
// 		name: "Netlify",
// 		icon: "/icons/netlify.svg",
// 		proficiency: 75,
// 		category: "other",
// 	},
// ];

// const categories = [
// 	{ id: "all", label: "All Skills", icon: "🔧" },
// 	{ id: "frontend", label: "Frontend", icon: "🎨" },
// 	{ id: "backend", label: "Backend", icon: "⚙️" },
// 	{ id: "other", label: "Other", icon: "🛠️" },
// ];

// const CircularProgress: React.FC<{ percentage: number }> = ({ percentage }) => {
// 	const radius = 35;
// 	const circumference = 2 * Math.PI * radius;
// 	const strokeDashoffset = circumference - (percentage / 100) * circumference;

// 	return (
// 		<div className="relative w-28 h-28 group cursor-pointer transition-transform duration-300 hover:scale-110">
// 			<svg className="w-full h-full transform -rotate-90">
// 				{/* Background circle */}
// 				<circle
// 					className="text-gray-200 dark:text-gray-600"
// 					strokeWidth="6"
// 					stroke="currentColor"
// 					fill="transparent"
// 					r={radius}
// 					cx="56"
// 					cy="56"
// 				/>
// 				{/* Progress circle */}
// 				<motion.circle
// 					className="text-blue-600 dark:text-blue-400"
// 					strokeWidth="6"
// 					strokeLinecap="round"
// 					stroke="currentColor"
// 					fill="transparent"
// 					r={radius}
// 					cx="56"
// 					cy="56"
// 					initial={{ strokeDashoffset: circumference }}
// 					animate={{ strokeDashoffset }}
// 					transition={{ duration: 1.5, ease: "easeOut" }}
// 					strokeDasharray={circumference}
// 				/>
// 			</svg>
// 			<motion.div
// 				className="absolute inset-0 flex items-center justify-center"
// 				initial={{ scale: 0 }}
// 				animate={{ scale: 1 }}
// 				transition={{ delay: 0.5, duration: 0.3 }}
// 			>
// 				<span className="text-2xl font-bold text-gray-700 dark:text-white">
// 					{percentage}%
// 				</span>
// 			</motion.div>
// 		</div>
// 	);
// };

// const Skills: React.FC = () => {
// 	const [activeCategory, setActiveCategory] = useState("all");
// 	const [isLoading, setIsLoading] = useState(false);

// 	const filteredSkills = skillsData.filter((skill) =>
// 		activeCategory === "all" ? true : skill.category === activeCategory
// 	);

// 	const handleCategoryChange = async (categoryId: string) => {
// 		setIsLoading(true);
// 		setActiveCategory(categoryId);
// 		// Simulate a small delay for smooth transition
// 		await new Promise((resolve) => setTimeout(resolve, 300));
// 		setIsLoading(false);
// 	};

// 	return (
// 		<section id="skills" className="py-20 bg-white dark:bg-gray-900">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.5 }}
// 					className="text-center mb-16"
// 				>
// 					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
// 						Skills & Expertise
// 					</h2>
// 					<p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
// 						Technologies and tools I work with
// 					</p>

// 					<div className="flex flex-wrap justify-center gap-4 mb-12">
// 						{categories.map((category) => (
// 							<motion.button
// 								key={category.id}
// 								onClick={() => handleCategoryChange(category.id)}
// 								whileHover={{ scale: 1.05 }}
// 								whileTap={{ scale: 0.95 }}
// 								className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2
//                   ${
// 										activeCategory === category.id
// 											? "bg-blue-600 text-white transform scale-105"
// 											: "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
// 									}`}
// 							>
// 								<span>{category.icon}</span>
// 								{category.label}
// 							</motion.button>
// 						))}
// 					</div>
// 				</motion.div>

// 				<AnimatePresence mode="wait">
// 					<motion.div
// 						key={activeCategory}
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						exit={{ opacity: 0, y: -20 }}
// 						transition={{ duration: 0.3 }}
// 						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
// 					>
// 						{filteredSkills.map((skill, index) => (
// 							<motion.div
// 								key={skill.id}
// 								initial={{ opacity: 0, y: 20 }}
// 								whileInView={{ opacity: 1, y: 0 }}
// 								viewport={{ once: true }}
// 								transition={{ duration: 0.5, delay: index * 0.1 }}
// 								whileHover={{ y: -5 }}
// 								className="group"
// 							>
// 								<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300">
// 									<div className="flex items-center gap-3 mb-6">
// 										<div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl p-2 group-hover:bg-blue-50 dark:group-hover:bg-gray-600 transition-colors duration-300">
// 											<img
// 												src={skill.icon}
// 												alt={skill.name}
// 												className="w-8 h-8"
// 											/>
// 										</div>
// 										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
// 											{skill.name}
// 										</h3>
// 									</div>
// 									<CircularProgress percentage={skill.proficiency} />
// 								</div>
// 							</motion.div>
// 						))}
// 					</motion.div>
// 				</AnimatePresence>
// 			</div>
// 		</section>
// 	);
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";

const skillsData = {
	Frontend: [
		{ name: "HTML", icon: "🌐" },
		{ name: "CSS", icon: "🎨" },
		{ name: "JavaScript", icon: "📜" },
		{ name: "ReactJs", icon: "⚛️" },
		{ name: "TypeScript", icon: "🟦" },
		{ name: "Tailwind CSS", icon: "🌬️" },
		{ name: "Redux", icon: "🔄" },
		{ name: "Vite", icon: "⚡" },
	],
	Backend: [
		{ name: "Python", icon: "🐍" },
		{ name: "Node.Js", icon: "🟩" },
		{ name: "SQL", icon: "🐬" },
	],
	"Other Skills": [
		{ name: "Data Structures & Algorithms", icon: "📚" },
		{ name: "Windows", icon: "🪟" },
		{ name: "Linux", icon: "🐧" },
		{ name: "Netlify", icon: "🌐" },
		{ name: "VS Code", icon: "💻" },
		{ name: "Git", icon: "📚" },
		{ name: "GitHub", icon: "🐱" },
	],
};

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		whileHover={{ scale: 1.05 }}
		className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2  hover:text-white transition-colors"
	>
		<span className="text-xl">{icon}</span>
		<span className="font-semibold">{name}</span>
	</motion.div>
);

const CategorySection = ({
	title,
	skills,
}: {
	title: string;
	skills: Array<{ name: string; icon: string }>;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50"
	>
		<h3 className="text-xl text-gray-200 font-bold mb-4">{title}</h3>
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{skills.map((skill) => (
				<SkillCard key={skill.name} {...skill} />
			))}
		</div>
	</motion.div>
);

const Skills = () => {
	return (
		<section
			className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 
                 dark:from-gray-900 dark:to-gray-800 min-h-screen"
			id="skills"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
						Skills & Technologies
					</h2>
					<p className="text-gray-800 dark:text-gray-300">
						Here are some of my skills on which I have been working on for the
						past 5 years.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{Object.entries(skillsData).map(([category, skills]) => (
						<CategorySection key={category} title={category} skills={skills} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
