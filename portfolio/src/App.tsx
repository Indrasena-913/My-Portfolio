// App.tsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { Theme } from "./lib/types";
import AboutSection from "./AboutMe";

const App: React.FC = () => {
	const [theme, setTheme] = useState<Theme>({
		isDark: localStorage.getItem("theme") === "dark",
		toggleTheme: () => {},
	});

	useEffect(() => {
		const toggleTheme = () => {
			setTheme((prev) => {
				const newTheme = !prev.isDark;
				localStorage.setItem("theme", newTheme ? "dark" : "light");
				document.documentElement.classList.toggle("dark", newTheme);
				return { ...prev, isDark: newTheme };
			});
		};

		setTheme((prev) => ({ ...prev, toggleTheme }));

		// Initialize theme
		document.documentElement.classList.toggle("dark", theme.isDark);
	}, []);

	return (
		<div className="min-h-screen grid  bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
			<Header theme={theme} />
			<main>
				<Hero />
				<AboutSection />
				<Projects />
				<Skills />
				<Education />
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
};

export default App;
