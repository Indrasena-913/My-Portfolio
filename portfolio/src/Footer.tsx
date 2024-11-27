// Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
	const socialLinks = [
		{
			id: 1,
			Icon: Github,
			href: "https://github.com/yourusername",
			label: "GitHub",
		},
		{
			id: 2,
			Icon: Linkedin,
			href: "https://linkedin.com/in/yourusername",
			label: "LinkedIn",
		},
		{
			id: 3,
			Icon: Twitter,
			href: "https://twitter.com/yourusername",
			label: "Twitter",
		},
		{
			id: 4,
			Icon: Mail,
			href: "mailto:your.email@example.com",
			label: "Email",
		},
	];

	return (
		<footer className="bg-gray-50 dark:bg-gray-900 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex space-x-6 mb-8"
					>
						{socialLinks.map(({ id, Icon, href, label }) => (
							<a
								key={id}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-gray-900 dark:text-gray-400 
                         dark:hover:text-white transition-colors duration-200"
								aria-label={label}
							>
								<Icon className="w-6 h-6" />
							</a>
						))}
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-gray-600 dark:text-gray-400 text-center"
					>
						© {new Date().getFullYear()} Indra. All rights reserved.
					</motion.p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
