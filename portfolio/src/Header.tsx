import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Theme } from "./lib/types";
import DarkModeToggle from "./DarkModeToggle";
import { PersonStanding } from "lucide-react";

interface HeaderProps {
	theme: Theme;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ id: "home", label: "Home", href: "#about" },
		{ id: "about", label: "About", href: "#aboutme" },
		{ id: "projects", label: "Projects", href: "#projects" },
		{ id: "skills", label: "Skills", href: "#skills" },
		{ id: "education", label: "Education", href: "#education" },
		{ id: "contact", label: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const mobileMenuVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.3 },
		},
		visible: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.3 },
		},
	};
	const handleMenuItemClick = (href: string) => {
		console.log(`Clicked href: ${href}`);
		const targetElement = document.querySelector(href);
		if (targetElement) {
			console.log(`Found target: ${targetElement}`);
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			console.error(`Target element not found for href: ${href}`);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full
        ${
					isScrolled
						? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
						: "bg-transparent"
				}`}
		>
			<nav className="container mx-auto px-3 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a
							href="#"
							className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white 
                  transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 flex "
						>
							<PersonStanding className="w-8 h-8" />
							IND
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-6">
						<div className="flex space-x-4 mr-4">
							{navItems.map((item) => (
								<a
									key={item.id}
									href={item.href}
									className="text-gray-700 dark:text-gray-300 
                      hover:text-blue-600 dark:hover:text-blue-400 
                      px-2 py-1 text-sm font-medium 
                      transition-colors duration-200"
								>
									{item.label}
								</a>
							))}
						</div>
						<DarkModeToggle theme={theme} />
					</div>

					{/* Mobile Menu Controls */}
					<div className="lg:hidden flex items-center space-x-4">
						<DarkModeToggle theme={theme} />
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							className="text-gray-700 dark:text-gray-300 
                  hover:text-blue-600 dark:hover:text-blue-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							{isMenuOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={mobileMenuVariants}
							className="lg:hidden"
						>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100 dark:bg-gray-800">
								{navItems.map((item) => (
									<a
										key={item.id}
										href={item.href}
										className="block text-gray-700 dark:text-gray-300 
                        hover:text-blue-600 dark:hover:text-blue-400 
                        px-3 py-2 text-base font-medium 
                        transition-colors duration-200"
										onClick={() => handleMenuItemClick(item.href)}
									>
										{item.label}
									</a>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};

export default Header;
