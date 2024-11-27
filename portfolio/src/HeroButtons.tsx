import React from "react";
import drivelink from "./assets/Link";

const HeroButtons: React.FC = () => {
	const handleHireClick = () => {
		const contactSection = document.getElementById("contact");
		contactSection?.scrollIntoView({ behavior: "smooth" });
	};

	const handleResumeClick = () => {
		// Replace with your actual resume link
		window.open(drivelink, "_blank");
	};

	return (
		<>
			<button
				onClick={handleHireClick}
				className="px-6 py-3 bg-blue-600 text-white rounded-xl 
                hover:bg-blue-700 transition-colors w-full sm:w-auto"
			>
				Hire Me
			</button>
			<button
				onClick={handleResumeClick}
				className="px-6 py-3 bg-white text-blue-600 
                border border-blue-600 rounded-xl 
                hover:bg-blue-50 transition-colors w-full sm:w-auto"
			>
				View Resume
			</button>
		</>
	);
};

export default HeroButtons;
