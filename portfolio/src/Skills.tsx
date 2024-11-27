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
