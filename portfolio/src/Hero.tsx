// import React from "react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import my from "./assets/my.png";
// import drivelink from "./assets/Link.ts";
// const Hero: React.FC = () => {
// 	const roles = [
// 		"Full Stack Developer",
// 		"Web Developer",

// 		"React Developer",
// 		"Frontend Engineer",
// 		"Software Engineer",
// 	];

// 	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
// 	const [isDeleting, setIsDeleting] = useState(false);
// 	const [text, setText] = useState("");
// 	const [delta, setDelta] = useState(200);

// 	useEffect(() => {
// 		let ticker = setInterval(() => {
// 			tick();
// 		}, delta);

// 		return () => clearInterval(ticker);
// 	}, [text, delta]);

// 	const tick = () => {
// 		let fullText = roles[currentRoleIndex];
// 		let updatedText = isDeleting
// 			? text.substring(0, text.length - 1)
// 			: fullText.substring(0, text.length + 1);

// 		setText(updatedText);

// 		if (isDeleting) {
// 			setDelta(100);
// 		}

// 		if (!isDeleting && updatedText === fullText) {
// 			setIsDeleting(true);
// 			setDelta(2000);
// 		} else if (isDeleting && updatedText === "") {
// 			setIsDeleting(false);
// 			setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
// 			setDelta(200);
// 		}
// 	};

// 	return (
// 		<section
// 			id="about"
// 			className="min-h-screen flex items-center justify-center relative overflow-hidden
//                  bg-gradient-to-br from-purple-50 to-blue-100
//                  dark:from-gray-900 dark:to-gray-800"
// 		>
// 			<div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
// 				<div
// 					className="flex flex-col-reverse md:flex-row items-center justify-between
//                     xl:gap-20 2xl:gap-24 gap-12"
// 				>
// 					{/* Content */}
// 					<motion.div
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.8 }}
// 						className="text-center md:text-left flex-1"
// 					>
// 						<motion.h1
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.2 }}
// 							className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
// 						>
// 							Hi, I'm{" "}
// 							<span className="text-blue-600 dark:text-blue-400">
// 								Indra Sena
// 							</span>
// 						</motion.h1>
// 						<motion.div
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.4 }}
// 							className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8"
// 						>
// 							<span className="border-r-2 border-blue-600 dark:border-blue-400 pr-1">
// 								{text}
// 							</span>
// 						</motion.div>
// 						<motion.div
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.6 }}
// 							className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
// 						>
// 							<a
// 								href="#contact"
// 								className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600
//                          text-white font-medium hover:bg-blue-700 transition-colors
//                          duration-200 shadow-lg hover:shadow-xl"
// 							>
// 								Hire Me
// 							</a>
// 							<a
// 								href={drivelink}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="inline-flex items-center px-8 py-3 rounded-full bg-white
// 								 text-blue-600 font-medium hover:bg-gray-50 transition-colors
// 								 duration-200 shadow-lg hover:shadow-xl dark:bg-gray-800
// 								 dark:text-blue-400 dark:hover:bg-gray-700 z-99"
// 							>
// 								View Resume
// 							</a>
// 						</motion.div>
// 					</motion.div>

// 					{/* Profile Picture with Circular Border */}
// 					<motion.div
// 						initial={{ opacity: 0, scale: 0.5 }}
// 						animate={{ opacity: 1, scale: 1 }}
// 						transition={{ duration: 0.8 }}
// 						className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 xl:ml-36"
// 					>
// 						<div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full" />
// 						<div className="absolute inset-2 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
// 							<img
// 								src={my}
// 								alt="Profile"
// 								className="absolute top-0 left-1/2 transform -translate-x-1/2  w-full h-full object-cover z-100 scale-125"
// 							/>
// 						</div>
// 					</motion.div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

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
