import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import my from "./assets/my.png";
import HeroButtons from "./HeroButtons";

const Hero: React.FC = () => {
	const roles = [
		"Full Stack Developer",
		"Web Developer",
		"React Developer",
		"Frontend Engineer",
		"Software Engineer",
	];

	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(200);

	useEffect(() => {
		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => clearInterval(ticker);
	}, [text, delta]);

	const tick = () => {
		const fullText = roles[currentRoleIndex];
		const updatedText = isDeleting
			? text.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(100);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(2000);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
			setDelta(200);
		}
	};

	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center relative overflow-hidden 
            bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 
            py-16 md:py-0"
		>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
					{/* Left Content Container */}
					<div className="flex flex-col space-y-4 text-center md:text-left ml-0 xl:ml-[200px] ">
						{/* Name Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
								Hi, I'm{" "}
								<span className="text-blue-600 dark:text-blue-400">
									Indra Sena
								</span>
							</h1>
						</motion.div>

						{/* Dynamic Text Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="flex items-center justify-center md:justify-start h-12"
						>
							<span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 border-r-2 border-blue-600 dark:border-blue-400 pr-2">
								{text}
							</span>
						</motion.div>
						<motion.div>
							<h3>
								"Technology: Empowering innovation, transforming possibilities,
								and shaping the future with every line of code."
							</h3>
						</motion.div>

						{/* Buttons Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
						>
							<HeroButtons />
						</motion.div>
					</div>

					{/* Right Side: Profile Picture */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						className="flex justify-center md:justify-center scale-125"
					>
						<div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0 scale-125 max-md:mt-20  rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
							<img
								src={my}
								alt="Profile"
								className=" absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover scale-125"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
