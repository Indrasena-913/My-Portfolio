import { motion } from "framer-motion";
import inter from "./assets/inter.png";
import tenth from "./assets/tenth.png";
import mtieat from "./assets/mtieat.png";

const educationData = [
	{
		id: "1",
		institution:
			"Mother Theresa Institute Of Engineering and Technology (JNTUA)",
		degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
		duration: "2021 - 2024",
		percentage: "83%",
		description:
			"I completed my B.Tech in Computer Science Engineering from Mother Theresa Institute Of Engineering and Technology (JNTUA), graduating in 2024 with 83%. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and more.",
		logo: `${mtieat}`,
	},
	{
		id: "2",
		institution: "Sri Vivekananda Junior College",
		degree: "Intermediate (MPC)",
		duration: "2018 - 2020",
		percentage: "9.6 CGPA",
		description:
			"I completed my Intermediate education (MPC) at Sri Vivekananda Junior College, graduating in 2020 with a 9.6 CGPA. I studied Mathematics, Physics, and Chemistry with a focus on Computer Science.",
		logo: `${inter}`,
	},
	{
		id: "3",
		institution: "Brahmarshi Primary & High School",
		degree: "Secondary Education",
		duration: "2017 - 2018",
		percentage: "9.7 CGPA",
		description:
			"I completed my secondary education at Brahmarshi Primary & High School, graduating in 2018 with a 9.7 CGPA. I studied Science with Computer Applications.",
		logo: `${tenth}`,
	},
];

const Education = () => {
	return (
		<section className="py-20 bg-white dark:bg-gray-900" id="education">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4">Education</h2>
					<p className="text-gray-400">
						My education has been a journey of self-discovery and growth. My
						educational details are as follows.
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline vertical line */}
					<div className="absolute right-1.5 top-0 bottom-0 w-1 bg-purple-600" />

					<div className="space-y-6">
						{educationData.map((edu, index) => (
							<motion.div
								key={edu.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative flex items-start"
							>
								{/* Education Card with 60px right margin */}
								<div className="flex-grow border border-gray-700 dark:border-gray-100 rounded-xl p-6 mr-[60px]">
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0">
											<img
												src={edu.logo}
												alt={edu.institution}
												className="w-12 h-12 object-contain"
											/>
										</div>
										<div className="flex-grow">
											<h3 className="text-xl font-semibold mb-2">
												{edu.institution}
											</h3>
											<p className="text-gray-600 dark:text-gray-300 mb-1">
												{edu.degree}
											</p>
											<p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
												{edu.duration}
											</p>
											<p className="text-gray-600 dark:text-gray-300">
												{edu.description}
											</p>
										</div>
									</div>
								</div>

								{/* Timeline dot */}
								<div className="absolute right-0 top-0 w-4 h-4 rounded-full bg-purple-600 transform translate-x-[0.5px]" />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
